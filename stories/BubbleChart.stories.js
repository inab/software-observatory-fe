import BubbleChart from '~/components/BubbleChart.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Plots/BubbleChart'
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BubbleChart },
  template: '<v-card><BubbleChart v-bind="$props" /></v-card>',
});

export const Findability = Template.bind({});
Findability.args = {
  fair_scores : 
    [
        {
            'indicator': 'F1',
            'scores': [0.8, 1.0],
			'count' : [25397, 18590],
			'percent' : [0.58, 0.42]
        }, 
        {
            'indicator': 'F2',
            'scores': [0.0, 0.6, 1.0],
			'count' : [3275, 13057, 27655],
			'percent' : [0.07, 0.29, 0.64]
        }, 
        {
            'indicator': 'F3',
            'scores': [0.0, 0.7, 0.85, 1.0],
			'count' : [4684, 8985, 18606, 11712],
			'percent' : [0.1, 0.2, 0.41, 0.29]
        }
	],
	labels: {
		'F3':'F3.<br> Searchability',
        'F2':'F2.<br> Existence <br> of Metadata',
        'F1':'F1.<br> Identity <br> uniqueness'
	},
    id:'F'
};