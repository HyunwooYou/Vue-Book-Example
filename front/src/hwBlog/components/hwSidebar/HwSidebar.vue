<template>
	<div class="hwSidebar">
		<div class="content">
			<div class="leftArea">
				<div class="plusIcon">
					<span v-if="!isOpenMenu" @click="toggleMenu()">+</span>
				</div>
				<div class="searchIcon">
					<div class="search-circle"/>
					<div class="search-bar"/>
				</div>
			</div>

			<div class="rightArea" :style="toggleRightArea">
				<div class="header">
					<div>menu</div>
					<div class="minusIcon" @click="toggleMenu()">-</div>
				</div>

				<div class="body">
					<directory-structure />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import DirectoryStructure from './DirectoryStructure.vue';

	export default {
		data() {
			return {
				isOpenMenu: true,
				curKeyCode: null,
			}
		},
		components: {
			DirectoryStructure
		},
		methods: {
			toggleMenu() {
				this.isOpenMenu = !(this.isOpenMenu);
			}
		},
		computed: {
			toggleRightArea() {
				if(this.isOpenMenu) {
					return 'display: flex';
				}else {
					return 'display: none';
				}
			}
		},
		watch: {

		}
	}
</script>

<style lang="scss" scoped>
	@import "~style/hwCustom.scss";
	@import "~style/hwConstant.scss";

	.hwSidebar {
		// position: relative;
		height: 100%;
		background-color: $black-4;
		color: $white-2;
		user-select: none;

		.content {
			display: flex;
			height: 100%;

			.leftArea {
				width: 21px;
				padding-top: 5px;
				line-height: 10px;
				margin-left: 4px;
				border-right: 1px solid $black-6;

				.plusIcon {
					margin-top: 5px;
					height: 20px;
					font-size: 22px;
					font-weight: bold;
					cursor: pointer;
				}

				.searchIcon {
					margin-top: 16px;
					cursor: pointer;

					.search-circle {
						width: 10px;
						height: 10px;
						border-radius:75px;
						margin-top: 2px;
						margin-left: 2px;
						font-size:12px;
						background-color: white;
					}

					.search-bar {
						margin-top: -3px;
						margin-left: 11px;
						width: 2px;
						height: 8px;
						transform: rotate(135deg);
						background-color: white;
					}
				}
			}

			.rightArea {
				display: flex;
				flex-direction: column;

				.header {
					display: flex;
					justify-content: space-between;
					height: 30px;
					line-height: 27px;
					padding: 0 8px;
					border-right: 1px solid $black-2;
					border-bottom: 2px solid $black-2;

					.minusIcon {
						font-size: 32px;
						margin-top: -3px;
						cursor: pointer;
					}
				}

				.body {
					flex: 1;
					overflow-y: scroll;
					height: 100%;
				}
				.body::-webkit-resizer {
					background: green;
				}
				.body::-webkit-scrollbar {
					width: 8px;
					height: 8px;
					border-radius: 5px;
				}
				.body::-webkit-scrollbar-track {
					background: $black-2;
				}
				.body::-webkit-scrollbar-thumb {
					background: #555;
					border-radius: 5px;
				}
				.body::-webkit-scrollbar-thumb:hover {
				 	background: #666;
			 	}
			}
		}
	}
</style>
