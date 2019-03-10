<docs>
	<template>
		<div class="sample">
			<div class="upperArea">
				Hello World
			</div>

			<div class="lowerArea">
				<div>{{msg}}</div>
				<span v-for="x in list">{{x}}</span>
			</div>

			<sample-common />
		</div>
	</template>

	<script>
		import SampleCommon from '@components/SampleCommon.vue';

		export default {
			name: 'sample',
			components: {
				SampleCommon
			},
			data() {
				return {
					msg: 'hello world',
					list: [
						1, 2, 3, 4, 5
					]
				}
			},
			methods: {
				sampleMethods() {
					console.log('sample methods');
					console.log('?');
			}
		}
	}
	</script>

	<style lang="scss" scoped>
		.sample {

			.upperArea {

			}

			.lowerArea {

			}
		}
	</style>
</docs>
