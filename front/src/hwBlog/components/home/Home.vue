<template>
	<div class="home">
		<div class="content">
			<div class="header">
				<div class="selector">
					<div class="selectorItem" v-for="item in selectorList"
						@click="changeSelectedTitle(item)">
						{{item}}
					</div>
				</div>
			</div>

			<div class="body">
				<div class="subItem" v-for="subItem in filteredList">
					<div class="hw-lg-title">{{subItem.title}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'home',
		data() {
			return {
				selectorList: [
					'All', 'Vue', 'Html', 'Js', 'Scss', 'Webpack'
				],
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
				],
				selectedTitle: 'Vue',
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

	// ::-webkit-scrollbar { display: none; }
	::-webkit-scrollbar { width: 11px; border-radius: 8px; }
	::-webkit-scrollbar-track { background: $black-5;  }
	::-webkit-scrollbar-thumb { background: #555; border-radius: 10px;}
	::-webkit-scrollbar-thumb:hover { background: #666; }

	.home {
		position: relative;
		background-color: $black-1;
		height: 100%;
		overflow-y: scroll;

		.content {

			.header {
				position: fixed;
				width: 100%;
				background-color: $black-2;
				border-left: 1px solid $black-6;
				border-bottom: 2px solid $black-4;

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
						z-index: 0;
					}
					.selectorItem:hover {
						background-color: $black-6;
						border: 1px solid $black-7;
					}
				}
			}

			.body {
				flex-wrap: wrap;
				display: flex;
				padding-left: 10px;
				padding-top: 50px;
				padding-bottom: 20px;

				.subItem {
					width: 220px;
					height: 220px;
					margin: 20px;
					padding: 20px;
					font-weight: bold;
					background-color: $black-2;
					border: 2px solid $black-2;
					cursor: pointer;
				}
				.subItem:hover {
					border: 2px solid $black-5;
				}
			}
		}
	}
</style>
