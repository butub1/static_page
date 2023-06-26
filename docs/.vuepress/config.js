module.exports = {
	title: 'Blog',
	description: '记录一些东西',
	base: "/static_page/",
	head: [
		['link', { rel: 'icon', href: '/logo.png' }]
	],
	themeConfig: {
		logo: '/logo.png',
		// sidebarDepth : 2,
		// displayAllHeaders: true, // 默认值：false
		sidebar: {
			
			'/哲学/': [
				'',     /* /foo/ */
				'宋明理学15讲',  /* /foo/one.html */
				'新教伦理与资本主义精神',   /* /foo/two.html */
				'西方哲学史',
				'解释世界',
				'鸡汤'
			],
			'/杂谈/' : [
				'',
				'更新部署',
				// '博客列表',
				'观影记录',
			],

			'/iOS/': [
				'',
				'UIImageView翻译',
				'/PG-ViewController/'
			],
			'/PG-ViewController/':[
				'/iOS/',
				// '/iOS/UIImageView翻译',
				'',
				'Overview',
				'ViewControllerDefinition',
				// 'ViewControllerDefinition双语',
				// 'Overview双语'
			],
			'/Tech/':[
				'',
				'DIP',
				'iOS-Demo'
			]
			// '/page-a',
			// ['/page-b', 'Explicit link text']
		},
		nav: [
			{ text: 'Home', link: '/' },

			{ text: 'iOS', 
				items: [
					{ text: "iOS 🍎", link: '/iOS/'},
					
					{ text: "翻译", items: [
						{ text: "UIImageView 翻译", link: '/iOS/UIImageView翻译.md'},
						{ text: "PG-ViewController 翻译", link: "/PG-ViewController/"}
					]}
				]
			},
			{
				text: 'Tech', items: [
					{ text: "Tech 🌟", link: '/Tech/'},
					{ text: "工程", items: [
						{ text: 'DIP', link: '/Tech/DIP' }
					]},
					{ text: "Projects", items: [
						{ text: "iOS-Demo", link: '/Tech/iOS-Demo.md'},
						// { text: "Swift", link: '/Tech/Swift.md'}
					]},
					// { text: "技巧", items: [
					// 	{text: "Tips", link:'/Tech/Tips'}
					// ]}
				]
			},
			{
				text: '哲学', items: [
					{ text: '哲学 🤔', link: '/哲学/'},
					{ text: '阅读笔记', items: [
						{ text: '宋明理学15讲', link: '/哲学/宋明理学15讲' },
						{ text: '新教伦理与资本主义精神', link: '/哲学/新教伦理与资本主义精神' },
						// { text: '道德情操论', link: '/哲学/道德情操论'}
					]},
					{ text: '我的想法', items:[
						{text : '解释世界', link: '/哲学/解释世界.md'},
						{ text: '鸡汤', link:'/哲学/鸡汤.md'},
					]},
					{ text: '哲学史', items:[
						{text : '西方哲学史', link: '/哲学/西方哲学史.md'},
						// { text: '中国哲学简史', link:'/哲学/哲学史/中国哲学简史.md'},
					]}
				]
			},
			{ text: '杂谈', items : 
				[
					{text:'构建初衷 😊', link: '/杂谈/'},
					{text:'更新部署', link: '/杂谈/更新部署'},
					{text: '博客列表', link:'/杂谈/博客列表'},
					{text: '记录', items: [
						{text: '观影记录🎬', link: '/杂谈/观影记录'},
					]},
				]
			},
			{ text: 'github', link: 'https://github.com/butub1/static_page' },
		],
		// sidebar: 'auto'
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
