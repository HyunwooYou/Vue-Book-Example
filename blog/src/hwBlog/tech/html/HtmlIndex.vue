<template>
	<div class="htmlIndex">
		<!-- Hello Html Index. -->
		<pre>{{docs}}</pre>
	</div>
</template>

<script>
	import DocsComponent from './DocsComponent.vue';

	export default {
		name: 'html-index',
		components: { DocsComponent },
		data() {
			return {
				docs: DocsComponent.__docs
			}
		},
		created() {
			this.initDocs();
		},
		methods: {
			initDocs() {
				console.log(this.docs);
				this.docs = this.docs.replace(/	/gi, '  ');
			}
		}
	}
</script>

<style lang="scss" scoped>

	.htmlIndex {

		pre {
			padding-left: 30px;
			position: absolute;
			font-size: 16px;			
		}
	}
</style>
