const path = require('path') // used for resolving aliases

module.exports = {
  stories: [
		'../stories/**/*.stories.mdx',
		'../stories/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
	framework: '@storybook/vue',
  // add this function to tweak the webpack config
  webpackFinal: async (config, { configType }) => {

    // used in the Vue community
    config.resolve.alias['~'] = path.resolve(__dirname, '../');

    // THIS is the tricky stuff!
    config.module.rules.push( {
      test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
			include: path.resolve(__dirname, '../'),
    } )

    // return the updated Storybook configuration
    return config
  }
}