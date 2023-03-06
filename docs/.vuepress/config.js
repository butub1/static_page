module.exports = {
	title: 'Blog',
	description: '记录一些东西',
	base: "/static_page/",
	head: [
		['link', { rel: 'icon', href: '/logo.png' }]
	],
	themeConfig: {
		logo: '/logo.png',
		nav: [
			{ text: 'Home', link: '/' },

			{ text: 'iOS', 
				items: [
					{ text: "iOS 🍎", link: '/iOS/Description.md'},
					{ text: "Projects", items: [
						{ text: "iOS-Demo", link: '/iOS/iOS-Demo.md'},
						{ text: "Swift", link: '/iOS/Swift.md'}
					]},
					{ text: "翻译", items: [
						{ text: "UIImageView 翻译", link: '/iOS/UIImageView翻译.md'}
					]}
				]
			},
			{
				text: 'Tech', items: [
					{ text: "Tech 🌟", link: '/Tech/Description.md'},
					{ text: "工程", items: [
						{ text: 'DIP', link: '/Tech/DIP' }
					]},
					{ text: "技巧", items: [
						{text: "Tips", link:'/Tech/Tips'}
					]}
				]
			},
			{
				text: '哲学', items: [
					{ text: '哲学 🤔', link: '/哲学/Description.md'},
					{ text: '阅读笔记', items: [
						{ text: '宋明理学15讲', link: '/哲学/宋明理学15讲' },
						{ text: '新教伦理与资本主义精神', link: '/哲学/新教伦理与资本主义精神' },
						{ text: '道德情操论', link: '/哲学/道德情操论'}
					]},
					{ text: '我的想法', items:[
						{text : '解释世界', link: '/哲学/解释世界.md'},
						{ text: '鸡汤', link:'/哲学/鸡汤.md'},
					]}
				]
			},
			{ text: '杂谈', items : 
				[
					{text:'构建初衷 😊', link: '/杂谈/'},
					{text:'更新部署', link: '/杂谈/更新部署'},
					{text: '博客列表', link:'/杂谈/博客列表'},
					{text: '记录', items: [
						{text: '记忆碎片📝', link: '/杂谈/记忆碎片'},
						{text: '杭州-北京', link: '/杂谈/杭州-北京.md'},
						{text: '2022年终总结', link: '/杂谈/2022年终总结.md'}
					]},
					

				]
			},
			{ text: 'github', link: 'https://github.com/butub1/static_page' },
		],
		sidebar: 'auto'
	},
	plugins: [
		[
		 '@saintic/utterances',
		  {
			repo: 'butub1/static_page',
			theme: 'github-light',
			issueTerm: 'pathname'
		  }
		]
	  ]
// 	plugins: {
//     '@vssue/vuepress-plugin-vssue': { // 评论插件
//       // 设置 `platform` 而不是 `api`
//       platform: 'github',

//       // 其他的 Vssue 配置
//       owner: 'butub1',
//       repo: 'static_page_comments',
//       clientId: 'aeb43e2c0641045ef305',
//       clientSecret: 'f56fa0ce4f944c59945ede9c8918ea3d2ee203ff',
//     },
//   },
}
