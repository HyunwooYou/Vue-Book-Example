<template>
	<div class="htmlIndex">
		<!-- Hello Html Index. -->
		<div class="content">
			<pre>{{docs}}</pre>
			<div v-for="el in msg">
				{{el}}
			</div>
		</div>
	</div>
</template>

<script>
	import DocsComponent from './DocsComponent.vue';

	export default {
		name: 'html-index',
		components: { DocsComponent },
		data() {
			return {
				docs: DocsComponent.__docs,
				msg: [],
			}
		},
		created() {
			this.initDocs();
		},
		methods: {
			initDocs() {
				// console.log(this.docs);
				this.docs = this.docs.replace(/	/gi, '  ');
				this.msg = this.docs;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "~style/hwCustom.scss";
	@import "~style/hwModule.scss";
	@import "~style/hwMixin.scss";


	.htmlIndex {
		display: flex;
		flex-direction: column;

		pre {
			display: flex;
			padding-left: 10px;
			line-height: 23px;
			font-size: 16px;
			margin-top: -15px;

			// border: 1px solid white;
		}
	}
</style>
