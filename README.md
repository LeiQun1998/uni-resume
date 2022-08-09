<p style="text-align: center; font-size: 25px; font-weight: 600;">WX个人简历小程序</p>

## 说明

此微信小程序代码使用uniapp开发，为个人制作简历小程序时所分离出来，作为个人简历小程序模板，供学习参考，可自行下载解压查看源码。

数据部分为了方便，没有进行后端的连接，数据存在`data/projectList`目录中

## 交流

QQ群：*491040420*

<p style="text-align: center;"><img src="https://image.weilanwl.com/colorui/githubQrcode.jpg" alt="" style="max-width:100%;" width="748"></p>				  

## 主要技术栈

- [UniApp](https://uniapp.dcloud.net.cn/)
- [Color UI](http://docs.xzeu.com/#/)

------

## 补充部分

**全局开启分享好友功能**

```
onLaunch: function() {
	console.log('App Launch')
	//全局开启分享好友功能
	wx.onAppRoute(function (res) {
		let pages = getCurrentPages(),
		view = pages[pages.length - 1]
		if (view) {
			// 'shareAppMessage', 'shareTimeline'
			wx.showShareMenu({
				withShareTicket: true,
				menus: ['shareAppMessage']
			});
		}
	})
},
```

**密钥查看**

进入小程序，增加输入密钥才可查看信息功能，**增强隐私性**(可自行修改配合后端动态使用)
模板的密钥为: aq0519

<p style="text-align: center;"><img src="https://s1.ax1x.com/2022/08/08/vQdMvQ.png" alt="个人简历" style="width: 256px; height: 508px;"></img></p>

------

## 以下为作者本人的简历小程序

<p style="text-align: center;"><img src="https://s1.ax1x.com/2022/08/08/vQKGrD.jpg" alt="个人简历" style="width: 200px; height: 200px;"></img></p>

