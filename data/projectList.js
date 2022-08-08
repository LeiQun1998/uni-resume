/**
 * time: 时间轴上的时间
 * 
 * title: 项目标题
 * companyName: 公司名称
 * zyjs: 主要技术
 * xmms: 项目描述
 * zrms: 责任描述
 */
let json = [
	{
		time: '2020/06——至今',
		data: [{
			id: 1,
			url: '/pages/about/about',
			color: 'blue',
			title: '项目标题-1-1',
			companyName: '公司-1',
			zyjs: 'Vue + Element + Echarts（主要框架）、Git（版本控制）',
			xmms: '针对客户需求，实现系统多角色控制，可视化图表实现对数据的统一展示及管理',
			zrms: '1、XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX <br><br>'+
					'2、XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX <br><br>'+
					'3、XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX <br><br> '+
					'4、XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX <br><br> '+
					'5、XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
		},{
			id: 2,
			url: '/pages/about/about',
			title: '项目标题-1-2',
			color: 'blue',
			companyName: '公司-1',
			zyjs: 'Vue + Element + Echarts（主要框架）、Git（版本控制）、webpack（项目打包）',
			xmms: '根据不同业务，实现对不同数据的管理规划、可视化图表信息展示，'+
					'实现前端可视化建模，根据数据自动生成，便于分析及应用数据',
			zrms: '1、XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX <br><br>'+
					'2、XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX <br><br>'+
					'3、XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX <br><br> '+
					'4、XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX <br><br> '+
					'5、XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
		},{
			id: 3,
			url: '/pages/about/about',
			title: '项目标题-1-3',
			color: 'blue',
			companyName: '公司-1',
			zyjs: 'HTML5、jQuery、JavaScript、CSS3、ES6',
			xmms: '维护旧系统，添加新功能，原生开发',
			zrms: '1、XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX <br><br>'+
					'2、XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX <br><br>'+
					'3、XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
		}]
	},
	{
		time: '2019/05——2020/05',
		data: [{
			id: 4,
			url: '/pages/about/about',
			title: '项目标题-2-1',
			color: 'cyan',
			companyName: '公司-2',
			zyjs: 'HTML5、jQuery、JavaScript、CSS3、Bootstrap',
			xmms: '前端重构和维护旧版工作系统',
			zrms: '1、XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX <br><br>'+
					'2、XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX <br><br>'+
					'3、XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX <br><br> '+
					'4、XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX <br><br> '+
					'5、XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX <br><br> '+
					'6、XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
		},{
			id: 5,
			url: '/pages/about/about',
			title: '项目标题-2-2',
			color: 'cyan',
			companyName: '公司-2',
			zyjs: 'Vue+Element（主要框架）、Git（版本控制）、webpack（项目打包）',
			xmms: '前端重构旧版的客户端平台系统',
			zrms: '1、XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX <br><br>'+
					'2、XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX <br><br>'+
					'3、XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX <br><br> '+
					'4、XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX <br><br> '+
					'5、XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX <br><br> '+
					'6、XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
		}]
	},
]


module.exports = {
	projectList: json
}