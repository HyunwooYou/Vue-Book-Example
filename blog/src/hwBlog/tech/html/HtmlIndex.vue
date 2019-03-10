<template>
	<div class="htmlIndex">
		<!-- Hello Html Index. -->
		<div class="content">
			<div class="highlight" v-for="x in d">
				<span class="innerSpan" v-for="y in x">
					<span v-if="y !== ' '"
						:style="{color: leafColor(y)}">{{y}}</span>
					<span v-else style="letter-spacing: 3px;">&nbsp;</span>
				</span>
				<br/>
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
				d: [], // element docs
			}
		},
		created() {
			this.initDocs();
			this.initMsg();
		},
		methods: {
			initDocs() {
				// Tab key => two spacing
				this.docs = this.docs.replace(/	/gi, '  ');
			},
			initMsg() {
				this.d = this.docs;
				this.d = this.d.split('\n');
				// this.d = this.d.replace(/ /gi, '  ');
				this.d.splice(0, 1);
			},
			fontColor(str) {
				console.log(str);
				if(str === 'import') return 'rgb(234, 135, 52)';
			},
			leafColor(char) {
				if(char === '=') return 'white';
				if(char === '\"') return 'rgb(167, 197, 98)';
				if(char === '\'') return 'rgb(90, 111, 77)';
				if(char === '{') return 'rgb(154, 167, 180)';
				if(char === '}') return 'rgb(154, 167, 180)';
				if(char === '(') return 'rgb(154, 167, 180)';
				if(char === ')') return 'rgb(154, 167, 180)';
				if(char === '[') return 'rgb(154, 167, 180)';
				if(char === ']') return 'rgb(154, 167, 180)';
				if(char === ':') return 'rgb(154, 167, 180)';
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import "~style/hwCustom.scss";
	@import "~style/hwModule.scss";
	@import "~style/hwMixin.scss";

	.htmlIndex {
	 	display: flex;
		flex-direction: column;

		.content {
			width: 100%;

			.highlight {
				line-height: 24px;
				letter-spacing: 0.5px;
				color: rgb(237, 200, 109);
			}
		}
	}

	pre {
		font-size: 18px;
		letter-spacing: 0.8px;
		white-space: pre-wrap;
	}
</style>
