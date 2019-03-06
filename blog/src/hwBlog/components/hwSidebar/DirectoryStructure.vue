<template>
	<div class="directoryStructure">
		<div class="content">


			<ul class="parent" v-for="directory in directoryList">
				<span class="titleArea">
					<span class="pointer">▶</span>
					<span class="title">{{directory.parentTitle}}</span>
				</span>

				<ul class="child" v-for="child in directory.childs">
					<span class="titleArea">
						<span class="pointer">▶</span>
						<span class="title">{{child.childTitle}}</span>
					</span>

					<li class="leaf" v-for="leaf in child.leaves">
						<span class="titleArea">
							<span class="title">{{leaf}}</span>
						</span>
					</li>
				</ul>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'directory-structure',
		data() {
			return {
				sampleList: [
					1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10
				],
				directoryList: [
					{
						parentTitle: 'Vue',
						childs: [
							{
								childTitle: 'How to Start Vue.js',
								leaves: [
									'Install Npm',
									'Create Vue Project',
									'Render Project using webpack',
								]
							},
							{
								childTitle: 'Basic Syntax',
								leaves: [
									'Computed',
									'Watch',
									'V-Modal',
								]
							},
							{
								childTitle: 'Component Life Cycle',
								leaves: [
									'Created',
									'Mounted',
									'Updated',
									'Destroyed',
								]
							},
							{
								childTitle: 'Component Hook',
								leaves: [
									'Data',
									'Props',
									'Methods',
									'Destroyed',
								]
							}
						]
					},

					{
						parentTitle: 'Html',
						childs: [
							{
								childTitle: 'Basic Element',
								leaves: [
									'<div>',
									'<span>',
									'<ul>, <li>',
									'<b>',
									'<p>',
									'<br/>',
								]
							},
							{
								childTitle: 'Html5',
								leaves: ['Child Title 1','Child Title 2']
							},
							{
								childTitle: 'Parent Title 3',
								leaves: ['Child Title 1','Child Title 2']
							}
						]
					},

					{
						parentTitle: 'Js',
						childs: [
							{
								childTitle: 'Parent Title 1',
								leaves: ['Child Title 1','Child Title 2','Child Title 3']
							},
							{
								childTitle: 'Parent Title 2',
								leaves: ['Child Title 1','Child Title 2']
							},
						]
					},

					{
						parentTitle: 'Scss',
						childs: [
							{
								childTitle: 'Parent Title 1',
								leaves: ['Child Title 1','Child Title 2','Child Title 3']
							},
							{
								childTitle: 'Parent Title 2',
								leaves: ['Child Title 1','Child Title 2',
								]
							},
							{
								childTitle: 'Parent Title 3',
								leaves: ['Child Title 1']
							}
						]
					},

					{
						parentTitle: 'Webpack',
						childs: [
							{
								childTitle: 'Webpack Parent Title 1',
								leaves: ['Child Title 1','Child Title 2','Child Title 3']
							},
						]
					},
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "~style/hwCustom.scss";
	@import "~style/hwModule.scss";

	.pointer {
		font-size: 12px;
		margin-right: 7px;
		margin-top: 1px;
		transform: rotate(90deg);
	}
	.title { cursor: pointer; }
	.titleArea { display: flex;	}

	.directoryStructure {
		display: flex;
		flex-direction: column;
		padding: 3px 25px 3px 15px;

		.content {
			// display: block;
			// width: 100%;
			white-space: nowrap;

			.parent {

				.child {
					padding-top: 5px;
					margin-left: 18px;
					padding-bottom: 7px;

					.leaf {
						padding-top: 3px;
						margin-left: 22px;
						font-size: 14px;
						color: $white-1;
					}
				}
			}
		}
	}
</style>
