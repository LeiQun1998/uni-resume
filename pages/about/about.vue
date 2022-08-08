<template>
	<view>
		<!-- <cu-custom bgColor="bg-gradual-cyan" :isBack="true">
			<view slot="backText">返回</view>
			<view slot="content">项目详情</view>
		</cu-custom> -->
		
		<scroll-view scroll-y class="page">
			<view class="cu-bar bg-white fixed">
				<view class="action sub-title">
					<text class="text-xl text-bold" :class="['text-'+color]">{{ options_title?options_title:'项目名称'}}</text>
					<text :class="['bg-'+color]" style="width: 100%"></text>
				</view>
			</view>
			
			<view class="padding" style="margin-top: 50px;">
				<view class="padding-xl radius shadow-warp bg-white">
					
					<view class="flex margin-top-sm">
						<view class="flex-sub nav-text">
							<text class="border-bottom-blue text-shadow text-black">所属公司:</text>
						</view>
						<view class="flex-treble nav-text text-shadow">{{ projectData.companyName }}</view>
					</view>
					
					<view class="flex margin-top-sm">
						<view class="flex-sub nav-text">
							<text class="border-bottom-blue text-shadow text-black">主要技术:</text>
						</view>
						<view class="flex-treble nav-text">{{ projectData.zyjs }}</view>
					</view>
					
					<view class="flex margin-top-sm">
						<view class="flex-sub nav-text">
							<text class="border-bottom-blue">
								<text class="border-bottom-blue text-shadow text-black">项目描述:</text>
							</text>
						</view>
						<view class="flex-treble nav-text">{{ projectData.xmms }}</view>
					</view>
					
					<view class="flex margin-top-sm">
						<view class="flex-sub nav-text">
							<text class="border-bottom-blue text-shadow text-black">责任描述:</text>
						</view>
						<view class="flex-treble nav-text" v-html="projectData.zrms"></view>
					</view>
				</view>
			</view>
			
		</scroll-view>
		
	</view>
</template>

<script>
	import listData from '../../data/projectList.js'
	
	export default {
		data() {
			return {
				options_title: '',
				projectData: null
			};
		},
		computed: {
			color(){
				if(!this.projectData) return 'blue'
				return this.projectData.color
			}
		},
		onLoad(options) {
			this.options_title = options.title
			
			// 根据路由传递过来的【title】参数，获取指定的详情数据
			const data = listData.projectList
			data.filter(item => item.data.filter(it => {if(it.title === options.title) this.projectData = it }))
		},
	}
</script>

<style lang="scss" scoped>
	.border-bottom-blue{
		padding-bottom: 4px;
	}
</style>
