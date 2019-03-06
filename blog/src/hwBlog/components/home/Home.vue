<template>
	<div class="home">
		<div class="subItem" v-for="subItem in filteredList">
			<div class="hw-lg-title">{{subItem.title}}</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'home',
		data() {
			return {
				subItemList: [
					{ title: 'Vue' },{ title: 'Vue' },{ title: 'Vue' },
					{ title: 'Vue' },{ title: 'Vue' },{ title: 'Vue' },

					{ title: 'Html' },{ title: 'Html' },{ title: 'Html' },

					{ title: 'Js' },{ title: 'Js' },{ title: 'Js' },
					{ title: 'Js' },{ title: 'Js' },

					{ title: 'Scss' },{ title: 'Scss' },{ title: 'Scss' },
					{ title: 'Scss' },{ title: 'Scss' },{ title: 'Scss' },

					{ title: 'Webpack' },{ title: 'Webpack' },

					{ title: 'Null' },{ title: 'Null' },{ title: 'Null' },
					{ title: 'Null' },{ title: 'Null' },{ title: 'Null' },
					{ title: 'Null' },{ title: 'Null' },{ title: 'Null' },
					{ title: 'Null' },{ title: 'Null' },{ title: 'Null' },
					{ title: 'Null' },{ title: 'Null' },{ title: 'Null' },
					{ title: 'Null' },{ title: 'Null' },{ title: 'Null' },
				],
				selectedTitle: 'All',
			}
		},
		methods: {
			changeSelectedTitle(newSelectedTitle) {
				this.selectedTitle = newSelectedTitle;
			}
		},
		computed: {
			filteredList() {
				if(this.selectedTitle === 'All') {
					return this.subItemList;
				} else {
					return this.subItemList.filter(x => x.title === this.selectedTitle);
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "~style/hwCustom.scss";
	@import "~style/hwModule.scss";
	@import "~style/hwMixin.scss";

	.home {

		.subItem {
			width: 150px;
			height: 150px;
			margin: 30px;
			padding: 20px;
			border-radius: 5px;
			font-weight: bold;
			background-color: $black-2;
			border: 3px solid $black-2;
			cursor: pointer;
			user-select: none;
			z-index: 0;
		}
		.subItem:hover {
			border: 3px solid $black-5;
		}
	}
</style>
