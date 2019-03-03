<template>
	<div class="index">
		<Home/>
	</div>
</template>

<script>
	import Home from './home/Home.vue';

	export default {
		name: 'index',
		components: {
			Home
		},
	}
</script>

<style lang="scss" scoped>
	@import "~style/hwConstant.scss";
	@import "~style/hwMixin.scss";
	@import "~style/hwCustom.scss";
	@import "~style/hwmodule.scss";

	.index {
		width: $hwIndexWidth;		
	}
</style>
