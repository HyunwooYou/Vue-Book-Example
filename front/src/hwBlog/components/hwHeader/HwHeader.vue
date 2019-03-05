<template>
	<div class="header">
		<div class="content">
			<div class="projectTitle">
				<!-- <img src="~assets/logo.png" /> -->
				<span class="vueTitle">Vue Code Storage</span>
			</div>

			<div style="flex: 1;"/>

			<!-- <div class="searchArea">
				<span>Search</span>
			</div> -->
		</div>

		<!-- <div class="content">
			<div class="logoArea" >
				<span class="projectName">Vue Useful Code</span>
			</div>

			<div style="flex: 1;"></div>

			<div class="searchArea">
				<input type="text" placeholder="Enter Title"
					@keyup.enter="searchEvent(search)"
					@blur="onFocusOutEvent()"
					v-model="search"/>
				<button class="searchBtn" @click="searchEvent(search)">

					<div class="search-circle"/>
					<div class="search-bar"/>
				</button>

				<ul v-show="isRenderSearchResult">
					<li v-for="data in filteredList" :key="data.title">
						{{data.title}}
					</li>
				</ul>
			</div>
		</div> -->
	</div>
</template>

<script>

	export default {
		name: 'hw-header',
		data() {
			return {
				search: '',
				dataList: [
					/*
						검색어 노출 기준
						- Root title
						- Parent title
					*/
					{ title: 'What is Vue.js' },

					{ title: 'How to Start Vue.js' }, // main
					{ title: 'Install Npm' },
					{ title: 'Create Vue Project' },
					{ title: 'Render Project using Webpack' },

					{ title: 'Basic Syntax' }, // main
					{ title: 'Computed' },
					{ title: 'Watch' },
					{ title: 'V-model' },

					{ title: 'Component Life Cycle' }, // main
					{ title: 'Created' },
					{ title: 'Mounted' },
					{ title: 'Updated' },
					{ title: 'Destroyed' },

					{ title: 'Component Hook' }, // main
					{ title: 'data' },
					{ title: 'props' },
					{ title: 'methods' },
				],
				isRenderSearchResult: false
			}
		},
		computed: {
			filteredList() {
				const searchVal = this.search;

				if(searchVal === '') {
					this.isRenderSearchResult = false;
					return null;
				}

				this.isRenderSearchResult = true;
				console.log('searchVal: ' + searchVal);

				return this.dataList.filter(x => {
					if(x.title.indexOf(searchVal) != -1) {
						return true;
					}else {
						return false;
					}
				});
			},
		},
		methods: {
			searchEvent(searchValue) {
				this.isRenderSearchResult = true;
				console.log('[Header] search: ' + searchValue);
			},
			onFocusOutEvent() {
				this.isRenderSearchResult = false;
				this.search = '';
				console.log('[Header] onfocusout');
			},	
		}
	}
</script>

<style lang="scss" scoped>
	@import "~style/hwConstant.scss";
	@import "~style/hwCustom.scss";
	@import "~style/hwMixin.scss";

	.header {
		padding-left: 27px;
		padding-right: 1px;
		background-color: $white-2;
		line-height: 25px;
		height: 25px;
		user-select: none;

		.content {
			display: flex;
			justify-content: space-around;
			width: $hwIndexWidth;
			// border: 2px solid green;

			.projectTitle {
				@include hwFlex(row);
				color: green;
				font-weight: bold;
				font-size: 16px;
				cursor: pointer;

				img {
					margin-right: 8px;
					width: 22px;
					height: 22px;
				}

				.vueTitle {
					margin-top: -2px;
				}
			}
			.projectTitle:hover {
				color: $black-7;
			}

			.searchArea {
				color: green;
				padding: 1px 7px 1px 7px;
				border: 2px solid $white-2;
				line-height: 12px;
				font-size: 18px;
				margin-top: 2px;
				cursor: pointer;
			}
			.searchArea:hover {
				border: 2px solid green;
				// color: $white-1;
				// background-color: $black-7;
			}
		}

		// .content {
		// 	display: flex;
		// 	justify-content: space-around;
		// 	width: $hwIndexWidth;
		// 	// margin: 0 auto;
		//
		// 	.logoArea {
		// 		// float: left;
		// 		line-height: 33px;
		// 		cursor: pointer;
		//
		// 		img {
		// 			$size: 32px;
		// 			width: $size;
		// 			height: $size;
		// 			margin-right: 5px;
		// 			margin-bottom: -9px;
		// 		}
		//
		// 		.projectName {
		// 			// color: green;
		// 			font-weight: bold;
		// 			font-size: 16px;
		// 		}
		// 		.projectName:hover {
		// 			color: green;
		// 		}
		// 	}
		//
		// 	.searchArea {
		// 		display: flex;
		// 		// justify-content: space-around;
		// 		margin-top: 5px;
		// 		height: 30px;
		// 		// opacity: 1;
		//
		// 		$searchWidth: 300px;
		//
		// 		input {
		// 			width: $searchWidth;
		// 		}
		//
		// 		.searchBtn {
		// 			height: 30px;
		// 			width: 32px;
		// 			margin-bottom: 10px;
		// 			margin-left: 5px;
		// 			font-size: 14px;
		// 			background-color: $black-4;
		// 			font-weight: bold;
		// 			letter-spacing: 1px;
		// 			border: 1px solid lightgray;
		// 			color: white;
		// 			cursor: pointer;
		//
		// 			.search-circle {
		// 				width: 12px;
		// 				height: 12px;
		// 				border-radius:75px;
		// 				margin-top: 2px;
		// 				margin-left: 1px;
		// 				font-size:12px;
		// 				background-color: white;
		// 			}
		//
		// 			.search-bar {
		// 				margin-top: -2px;
		// 				margin-left: 14px;
		// 				width: 2px;
		// 				height: 8px;
		// 				transform: rotate(135deg);
		// 				background-color: white;
		// 			}
		// 		}
		// 		.searchBtn:hover { background-color: $black-2; }
		//
		// 		ul {
		// 			position: absolute;
		// 			// width: 270px;
		// 			width: $searchWidth + 10px;
		// 			margin-top: 35px;
		// 			padding-top: 10px;
		// 			padding-bottom: 12px;
		// 			border-radius: 4px;
		// 			background-color: white;
		// 			border: 1px solid lightgray;
		// 			z-index: 1000;
		//
		// 			li {
		// 				user-select: none;
		// 				padding-top: 7px;
		// 				padding-bottom: 7px;
		// 				padding-left: 10px;
		// 				opacity: 1;
		// 			}
		// 			li:hover {
		// 				background-color: $nature-1;
		// 				cursor: pointer;
		// 			}
		// 		}
		// 	}
		//}
	}
</style>
