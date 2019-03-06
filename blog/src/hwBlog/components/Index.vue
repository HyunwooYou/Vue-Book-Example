<template>
	<div class="index">
		<hw-menu></hw-menu>
    <router-view class="content"></router-view>

		<div class="scrollHider" />
	</div>
</template>

<script>
	import HwMenu from './hwMenu/HwMenu.vue';

	export default {
		name: 'index',
		components: {
			HwMenu
		},
	}
</script>

<style lang="scss" scoped>
	@import "~style/hwConstant.scss";
	@import "~style/hwMixin.scss";
	@import "~style/hwCustom.scss";
	@import "~style/hwmodule.scss";

	.index {
		display: flex;
		flex-direction: column;
		width: $hwIndexWidth;
		background-color: $black-1;

		.content {
			display: flex;
			flex-wrap: wrap;
			align-content: flex-start;
			height: 100%;
			padding: 10px;
			overflow: scroll;

			color: white;					
		}

		::-webkit-scrollbar { width: 13px; height: 15px; border-radius: 5px; }
		::-webkit-scrollbar-track { background: $black-5; }
		::-webkit-scrollbar-thumb { background: #555; border-radius: 5px;}
		::-webkit-scrollbar-thumb:hover { background: #666; }

		.scrollHider {
			width: 13px;
			height: 20px;
			position: absolute;
			bottom: 17px;
			right: 0;

			background-color: $black-5;

			// border: 2px solid red;
		}
	}
</style>
