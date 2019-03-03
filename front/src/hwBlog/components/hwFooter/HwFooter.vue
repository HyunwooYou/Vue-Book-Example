<template>
	<div class="footer">
		<div class="content">
			<span>Author: Hyun-woo, Yoo</span>
			<span>Contact : hyun-woo.yoo@hp.com</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'hw-footer',
	}
</script>

<style lang="scss" scoped>
	@import "~style/hwConstant.scss";

	$footer-height: 20px;

	.footer {
		height: $footer-height;
		line-height: $footer-height;
		padding: 0 10px;
		background-color: $black-4;
		color: white;

		border-top: 1px solid $black-6;

		.content {
			display: flex;
			justify-content: space-between;
			font-size: 11px;
			user-select: none;
		}
	}
</style>
