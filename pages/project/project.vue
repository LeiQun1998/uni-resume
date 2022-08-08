<template>
	<view>
		<!-- <cu-custom bgColor="bg-gradual-cyan"><view slot="content">项目经验</view></cu-custom> -->

		<scroll-view scroll-y style="height: 100vh;">
			<!-- 卡组样式 -->
			<view v-if="false" class="nav-list margin-top">
				<!-- navigator: 页面跳转标签 -->
				<navigator hover-class="none" :url="item.url +'?title='+ item.title" class="nav-li" navigateTo :class="'bg-'+item.color"
					:style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item, index) in elements"
					:key="index" style="width: 100%;">
					<view class="nav-title">{{ item.title }}</view>
					<view class="nav-name">所属公司: {{ item.companyName }}</view>
					<text class="cuIcon-newsfill"></text>
				</navigator>
			</view>
			
			<!-- 时间轴样式 -->
			<view class="cu-timeline padding-sm" v-for="(p_list, p_index) in projectList" :key="p_index">
				<view class="cu-time">{{ p_list.time }}</view>
				<view class="cu-item text-blue" v-for="(item, index) in p_list.data" :key="index">
					<!-- 按压反馈: hover-class="none" -->
					<navigator :url="item.url +'?title='+ item.title" class="nav-li" navigateTo :class="'bg-'+item.color"
						:style="[{animation: 'show ' + (item.id*0.2+1) + 's 1'}]" style="width: 100%;">
						
						<view class="nav-title padding-bottom-sm border-bottom">{{ item.title }}</view>
						
						<view class="flex margin-top-sm">
							<view class="flex-sub nav-text">主要技术:</view>
							<view class="flex-treble nav-text">{{ item.zyjs }}</view>
						</view>
						
						<view class="flex margin-top-sm">
							<view class="flex-sub nav-text">项目描述:</view>
							<view class="flex-treble nav-text">{{ item.xmms }}</view>
						</view>
						
						<view class="flex margin-top-sm" v-if="false">
							<view class="flex-sub nav-text">责任描述:</view>
							<view class="flex-treble nav-text" v-html="item.zrms"></view>
						</view>
						
						<view class="nav-name">所属公司: {{ item.companyName }}</view>
						<text class="cuIcon-newsfill"></text>
					</navigator>
				</view>
			</view>
			
		</scroll-view>
	</view>
</template>

<script>
	import listData from '../../data/projectList.js'
	
	export default {
		onLoad() {
			this.projectList = listData.projectList
		},
		data() {
			return {
				projectList: null, // 接收项目数据
				
				elements: [{
						url: '/pages/about/about',
						title: '项目标题-1-1',
						companyName: '公司-1',
						color: 'red',
					}, {
						url: '/pages/about/about',
						title: '项目标题-1-2',
						companyName: '公司-1',
						color: 'cyan',
					}, {
						url: '/pages/about/about',
						title: '项目标题-1-3',
						companyName: '公司-1',
						color: 'orange',
					}, {
						url: '/pages/about/about',
						title: '项目标题-2-1',
						companyName: '公司-2',
						color: 'blue',
					}, {
						url: '/pages/about/about',
						title: '项目标题-2-2',
						companyName: '公司-2',
						color: 'olive',
					}
				],

			};
		}
	}
</script>

<style lang="scss">
	
</style>
