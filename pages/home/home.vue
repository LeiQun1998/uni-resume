<template>
	<view>
		<!-- <cu-custom bgColor="bg-gradual-cyan"><view slot="content">基本信息</view></cu-custom> -->
		
		<scroll-view scroll-y class="page">
			<view class="padding">
				<view :style="[{animation: 'show ' + (1*0.2+1) + 's 1'}]">
					<view class="padding-xl radius shadow-warp bg-white">
						<view class="flex justify-center">
							<image class="cu-avatar xl round" src="/static/avatar.png"></image>
						</view>
						<view class="flex justify-center margin-top-sm">
							<text class="text-bold">前端开发攻城师</text>
						</view>
						
						<view class="flex justify-center margin-top-sm">
							<text>现居：中国</text>
							<text class="margin-left">期望职位：<text class="text-orange text-shadow">前端开发</text></text>
						</view>
						<view class="flex justify-center margin-top-sm">
							<text>男</text>
							<text class="margin-left-sm">25岁</text>
							<text class="margin-left-sm">3年工作经验</text>
						</view>
						
						<view class="flex justify-around margin-top-sm">
							<view class="cu-capsule round hover-green" @tap="showModal" data-target="Image">
								<view class='cu-tag bg-green'>
									<text class="cuIcon-weixin text-xl"></text>
								</view>
								<view class="cu-tag line-green">添加微信</view>
							</view>
							<view class="cu-capsule round hover-cyan" @tap="call">
								<view class='cu-tag bg-cyan'>
									<text class="cuIcon-phone text-xl"></text>
								</view>
								<view class="cu-tag line-cyan">拨打电话</view>
							</view>
							<view class="cu-capsule round hover-blue" @tap="saveContact">
								<view class='cu-tag bg-blue '>
									<text class="cuIcon-addressbook text-xl"></text>
								</view>
								<view class="cu-tag line-blue">保存通讯录</view>
							</view>
						</view>
					</view>
				</view>
				
				<view :style="[{animation: 'show ' + (2*0.2+1) + 's 1'}]">
					<view class="radius shadow-warp bg-white margin-top">
						<view class="cu-bar bg-white">
							<view class="action sub-title">
								<text class="text-xl text-bold text-blue">技术栈</text>
								<text class="text-ABC text-blue">Skill</text>
							</view>
						</view>
						<view class="padding-sm flex flex-wrap">
							<view class="padding-xs" v-for="(item, index) in skillList" :key="index">
								<view class='cu-tag' :class="'bg-' + item.color">{{item.title}}</view>
							</view>
						</view>
					</view>
				</view>
				
				<view :style="[{animation: 'show ' + (3*0.2+1) + 's 1'}]">
					<view class="radius shadow-warp bg-white margin-top">
						<view class="cu-bar bg-white">
							<view class="action sub-title">
								<text class="text-xl text-bold text-cyan">自我评价</text>
								<text class="text-ABC text-cyan">Evaluate</text>
							</view>
						</view>
						<view class="padding-sm flex flex-wrap">
							本人具有良好的编程习惯，习惯做笔记；
							工作认真负责，善于在实践中积累学习，不断的完善自我；
							对新技术有着强烈的求知欲望，学无止境。
						</view>
					</view>
				</view>
				
				<view :style="[{animation: 'show ' + (4*0.2+1) + 's 1'}]">
					<view class="radius shadow-warp bg-white margin-top">
						<view class="cu-bar bg-white">
							<view class="action sub-title">
								<text class="text-xl text-bold text-mauve">教育背景</text>
								<text class="text-ABC text-mauve">Education</text>
							</view>
						</view>
						<view class="padding-sm flex justify-around">
							<view>
								<text class="cuIcon-home text-xl text-blue"></text>
								<text>毕业院校: xxxx学院</text>
							</view>
							<view>
								<text class="cuIcon-news text-xl text-blue"></text>
								<text class="margin-left-xs">计算机 / 本科</text>
							</view>
						</view>
					</view>
				</view>
				
				<view :style="[{animation: 'show ' + (5*0.2+1) + 's 1'}]">
					<view class="radius shadow-warp bg-white margin-top">
						<view class="cu-bar bg-white">
							<view class="action sub-title">
								<text class="text-xl text-bold text-red">工作经历</text>
								<text class="text-ABC text-red">Work</text>
							</view>
						</view>
						<view class="padding-sm flex flex-wrap">
							<view class="nav-li bg-blue" style="width: 100%;">
								<view class="nav-title">2020/06 - 至今</view>
								<view class="nav-content">职位: 前端开发工程师</view>
								<view class="nav-name">所属公司: 公司-1</view>
								<text class="cuIcon-group_fill"></text>
							</view>
							<view class="nav-li bg-cyan" style="width: 100%;">
								<view class="nav-title">2019/05 - 2020/05</view>
								<view class="nav-content">职位: 前端开发工程师</view>
								<view class="nav-name">所属公司: 公司-2</view>
								<text class="cuIcon-group_fill"></text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		
		<!--展示个人微信二维码-->
		<view :class="['cu-modal', modalName==='Image'?'show':'']">
			<view class="cu-dialog">
				<!-- 此处二维码为作者小程序的二维码，正式请更换为自己的真实微信二维码 -->
				<image class="wechat" src="/static/aq-xcx-img.png" show-menu-by-longpress="1"></image>
				<view class="cu-bar bg-white">
					<view class="action margin-0 flex-sub solid-left" @tap="hideModal">
						长按可识别或保存二维码(点击此处可关闭)
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: null, // 是否展示'个人二维码'模态框
				// 技术栈数据
				skillList: [{
					title: 'Vue',
					color: 'green'
				},{
					title: 'Element UI',
					color: 'blue'
				},{
					title: 'Echarts',
					color: 'red'
				},{
					title: 'Bootstrap',
					color: 'mauve'
				},{
					title: 'uni-app',
					color: 'olive'
				},{
					title: 'HTML5、JavaScript、CSS、ES6',
					color: 'yellow'
				},{
					title: 'GitHub',
					color: 'purple'
				},{
					title: '...',
					color: 'grey'
				}]
			}
		},
		onLoad() {

		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			//拨打电话
			call(e){
			    wx.makePhoneCall({
					phoneNumber: '135xxxxxxxx' //此处为模拟动画，正式请填写个人真实电话
			    })
			},
			//保存通讯录
			saveContact(e){
			    wx.addPhoneContact({
					nickName: '阿Q',
					firstName:'前端开发攻城师',
					remark:'前端',
					mobilePhoneNumber:'135xxxxxxxx',
					weChatNumber:'135xxxxxxxx',
					organization:'广州睿帆科技有限公司',
					title:'前端开发工程师',
					addressCountry: '中国',
					addressState: '', // 省
					addressCity: '', // 市
					success: res => {
						wx.showToast({
							title: '已保存至通讯录',
							icon: 'success',
							duration: 2000
						})
					}
			    })
			}
		}
	}
</script>

<style lang="scss" scoped>
	.hover-green:active{
		background-color: #39b54a;
		view{
			color: #ffffff;
		}
	}
	.hover-cyan:active{
		background-color: #1cbbb4;
		view{
			color: #ffffff;
		}
	}
	.hover-blue:active{
		background-color: #0081ff;
		view{
			color: #ffffff;
		}
	}
	.wechat{
	  width: 680rpx;
	  height: 680rpx;
	}
	
</style>