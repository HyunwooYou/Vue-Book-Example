<template>
	<div class="hwMenu">
		<div class="selector">
			<router-link class="selectorItem" v-for="item in selectorList"
				@click="changeSelectedTitle(item)"
				:to="item">
					{{item}}
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'hw-menu',
		data() {
			return {
				selectorList: [
					'vue', 'html', 'js', 'scss', 'webpack'
				],
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "~style/hwCustom.scss";
	@import "~style/hwModule.scss";
	@import "~style/hwMixin.scss";

	.hwMenu {
		background-color: $black-2;
		border-left: 1px solid $black-6;
		border-bottom: 1px solid $black-4;
		user-select: none;

		.selector {
			display: flex;
			line-height: 29px;

			.selectorItem {
				width: 100px;
				background-color: $black-3;
				border: 1px solid $black-6;
				color: white;
				text-align: center;
				margin-right: 1px;
				cursor: pointer;
				text-decoration: none;
				// z-index: 0;
			}
			.selectorItem:hover {
				background-color: $black-6;
				border: 1px solid $black-7;
			}
		}
	}
</style>
