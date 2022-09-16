# Software Observatory Front-End

This repository contains the Software Observatory Front-End, which is a Nuxt application. The Software Observatory aims to be an instrument for the systematic observation and diagnosis of the quality of research software in the Life Sciences. 


## Development

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

### Axios 
Can be installed while creating the project with `vue-cli`. 

#### Configuration

```js 
// nuxt.config.js
modules: [
    '@nuxtjs/axios',
  ],
```
To set the base URL for `dev` and `prod`: 

```js
// nuxt.config.js 
axios: {
    baseURL: development ? 'http://localhost:3500' : 'https://observatory-dev.openebench.bsc.es/api'
  },
``` 
When run in 'dev' mode (`npm run dev`), axios default base URL will be `http://localhost:3500`. When run in 'prod' mode, `npm build`+`npm generate`, axios default base URL while be 'https://observatory-dev.openebench.bsc.es/api'. 

It is not necessary to 'call' this variable anywhere, axios already adds the base URL before paths by default. 

#### Usage 

##### Import
Imported once, in Vuex store index: 

```js
// store/index.js 

import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
```
##### Example

```js
// In action in store
let result = await this.$axios.get('/stats/tools/count_per_source');
```
The full requested URL is 'https://observatory-dev.openebench.bsc.es/api/stats/tools/count_per_source' in production environment.

### Plotly 

All plots in the Software Observatory are done using the [Plotly.js](https://plotly.com/javascript/), an Open Source graphing library. 
To install plotly:
```bash
npm i plotly.js-dist
```
To use Plotly:
- Import Plotly using `import Plotly from 'plotly.js-dist'` in script. 
  
 - Build the plot in a div of a specific id using:  
     
    ```js
    Plotly.newPlot("id", {
        "data": foo,
        "layout": foo,
        })
    ```
A full small example: 

```js
// ExamplePlot.vue 

<template>
    <div id="plot"></div>
</template>
<script>
import Plotly from 'plotly.js-dist'

data(){
    return {
        trace = {
            type: "bar",
            x: ['MIT', 'Apache-2','GPL-3'],
            y: ['4235', '5674', '4324],
            name: "Licenses",
        },
        layout: {
            yaxis: {
                    title: 'Number of instances'
                    },
            xaxis: {
                title: 'License Family/Type',
                categoryorder:'total ascending'
            },
            autosize: true,
            height: 300,
            margin: {
                autoexpand: true,
            }
        },
        config: {
            responsive: true,
            displayModeBar: false
        }
    },
//
mounted(){
    Plotly.newPlot('plot', {
        "data": this.trace,
        "layout": this.layout,
        "config": this.config
        })

}

</script>

```

### Cache 
API calls are cached using [vuex-cache](https://www.npmjs.com/package/vuex-cache) module. 
To install cache-vuex: 

```bash
npm install vuex-cache --save
``` 

#### Configuration 

Vuex-cache is a plugin, which must be specified in nuxt configuration. 

```js
// nuxt.config.js

  plugins: [
    { src: '~/plugins/vuex-cache.js', ssr: false },
  ],
``` 
Confguration is stored in `/plugins/vuex-cache.js` file. 

```js
// /plugins/vuex-cache.js 

import createVuexCache from 'vuex-cache';

export default ({ store }) => {
  const options = {
    timeout: 2 * 60 * 60 * 1000 // Equal to 2 hours in milliseconds.
  };

  const setupVuexCache = createVuexCache(options);

  window.onNuxtReady(() => setupVuexCache(store));
};
```


#### Usage
##### Initialization 
To initialize the cache, in the index of the store:

```js
// store/index.js
import createCache from "vuex-cache";

export const plugins = [
    createCache()
]
```
##### Caching 
Use  `this.cache.dispatch` to make a request if the action is not cached and return the cached promise otherwised. 
Example:
In store file:
```js 
// store/trends.js
export const actions = {
    async getLicensesSunburst({commit, state}){
            var URL = BASE_URL + 'licenses_summary_sunburst?collection=' + state._currentCollection;

            commit('setLoaded', {licensesSunburst: true});

            let result = await this.cache.dispatch('trends/GET_URL', URL);

            commit('setLicensesSunburst', result);
            commit('setLoaded', {licensesSunburst: false});
        },

        async GET_URL({commit, state}, URL){
            let result = await this.$axios.get(URL);
            return result.data.data
        }
}
```
Other usefull methods are listed in [vuex-cache documentation](https://www.npmjs.com/package/vuex-cache)

### Vuex Store 
This project uses one store file per page, in addition to `store/index.js`.


## Build

```bash
# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```