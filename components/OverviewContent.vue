<template>
       	<v-container fluid>
		<v-container>
			<h1 class="text-h4 mt-13 mb-5 hidden-md-and-up banner">
				 Software <br> Observatory
			</h1>
			<info-slider class="mb-5 hidden-sm-and-down" :img="illustration">
				<template #header>
					<h1 class="text-h4">Benchmarking Communities</h1>
				</template>
				<p class="text--secondary">
					
				</p>

				<p class="text--secondary">
					The tools observatory aims to monitor the technical quality of research software in the Life Sciences. 
            This is achieved through a comprehensive collection of metadata from different sources, which along 
            with additional computational means, allows the automatic generation of metrics.
				</p>
			</info-slider>
			<!--v-row v-if="">
				<v-col
					v-for="(c, i) in [1, 2, 3, 4, 5, 6, 7, 8]"
					:key="i"
					cols="12"
					sm="4"
					md="3"
				>
					<v-skeleton-loader
						class="mx-auto"
						max-width="300"
						type="card, list-item-two-line, actions"
						elevation="2"
					></v-skeleton-loader>
				</v-col>
			</v-row-->
            <!--v-row v-else-->
			<v-row>
				<v-col
					v-for="(source, index) in counts"
					:key="index"
					cols="12"
					sm="4"
					md="3"
				>
					<stats-card
						:name="source.name"
						:logo="source.logo"
						:links="source.links"
						:count="source.count"
					/>
				</v-col>
			</v-row>
		</v-container>
	</v-container>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,800');
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700');

.banner {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2rem;
    font-weight: 800;
    line-height: normal;
    color: white;
    text-transform: uppercase;
}
</style>