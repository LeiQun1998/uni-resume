<template>
	<view>
		<!-- 图片背景 -->
		<image class="wel-bg-image" src="../../static/wel-bg.png"></image>
		
		<view class="flex flex-direction" style="margin-top: 65%;" :style="[{animation: 'show ' + (1*0.2+1) + 's 1'}]">
			<text class="text-white text-center margin-top text-xl text-bold">世上本没有路</text>
			<text class="text-white text-center margin-top text-xl text-bold">走的人多了</text>
			<text class="text-white text-center margin-top text-xl text-bold">便成了路</text>
		</view>
		
		<!-- <view class="text-center pos-bot" :style="[{animation: 'show ' + (3*0.2+1) + 's 1'}]">
			<text class="text-orange text-shadow animation-shake text-xxl text-bold">正在进入......</text>
		</view> -->
		
		<view class="flex justify-center align-center cu-bar pos-bot animation-slide-bottom">
			<view class="search-form round bg-white hover-my-input shadow-blur">
				<text class="cuIcon-lock"></text>
				<input type="text" password :value="myValue" @input="inputCom" placeholder="请咨询并输入密钥后查看" confirm-type="go"></input>
			</view>
			<view class="action">
				<button @tap="subMy" class="cu-btn bg-gradual-blue shadow-blur round">确认</button>
			</view>
		</view>
		
		<!-- 密钥提示模态框 -->
		<view class="cu-modal" :class="modalShow?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content" :class="[myValue==''?'text-orange':'text-red']">
						{{ myValue==''?'密钥不为空':'密钥错误'}}
					</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					{{ myValue==''?'密钥不为空，请重新输入！':'密钥错误！请确认是否正确，或咨询后再输入！'}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalShow: false, // 控制模态框的显示
				myValue: '' // 接收密钥input的值
			}
		},
		onLoad: function (options) {
		 //    setTimeout(function(){
			// 	uni.switchTab({
			// 		url: '/pages/home/home',
			// 	})
			// },2000);
		},
		methods: {
			hideModal(e) {
				this.modalShow = false
			},
			inputCom(e){
				this.myValue = e.detail.value
			},
			subMy(e){
				// 自定义密钥：aq0519
				if(this.myValue === 'aq0519'){
					uni.switchTab({
						url: '/pages/home/home',
					})
				}else{
					this.modalShow = true
				}
			}
		}
	}
</script>

<style lang="scss">
	
	.wel-bg-image{
		position: absolute;
		left: 0;
		bottom: 0;
		display: block;
		width: 100%;
		height: 100%;
		z-index: -999;
	}
	
	.pos-bot{
		position: absolute;
		bottom: 15px;
		width: 100vw;
	}
	
	.hover-my-input{
		border: 2px solid #0081ff;
	}
</style>