module.exports = {
	title: 'Hippo ☁️',
	description: '记录一些东西',
	base: "/static_page/",
	head: [
		['link', { rel: 'icon', href: '/logo.png' }]
	],
	markdown: {
		lineNumbers: true,
		toc: {
			includeLevel: [1, 2, 3, 4]
		}
	},
	themeConfig: {
		logo: '/logo.png',
		// sidebarDepth : 2,
		// displayAllHeaders: true, // 默认值：false
		lastUpdated: 'Last Updated',
		sidebar: {
			'/Philosophy/': [
				'',     /* /foo/ */
				'宋明理学15讲',  /* /foo/one.html */
				'新教伦理与资本主义精神',   /* /foo/two.html */
				// '西方哲学史',
				'解释世界',
			],
			'/Others/' : [
				'',
				'更新部署',
				'Memory',
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
				'PresentationAndTransitions',
				'AdaptivityAndSizeChanges',
				// 'AdaptivityAndSizeChanges双语',
				// 'PresentationAndTransitions双语',
				// 'ViewControllerDefinition双语',
				// 'Overview双语'
			],
			'/Technology/':[
				'',
				// 'DIP',
				'iOS-Demo'
			],
			'/' : [
				'',
				'ABOUT',
				'Sponsor'
			],
			
			// '/page-a',
			// ['/page-b', 'Explicit link text']
		},
		nav: [
			{ text: 'Home 🏠', link: '/' },

			{ text: 'iOS 🍎', 
				items: [
					{ text: "iOS", link: '/iOS/'},
					
					{ text: "翻译", items: [
						{ text: "UIImageView 翻译", link: '/iOS/UIImageView翻译.md'},
						{ text: "PG-ViewController 翻译", link: "/PG-ViewController/"}
					]}
				]
			},
			{
				text: 'Technology 🌟', items: [
					{ text: "Technology", link: '/Technology/'},
					// { text: "工程", items: [
					// 	{ text: 'DIP', link: '/Technology/DIP' }
					// ]},
					{ text: "Projects", items: [
						{ text: "iOS-Demo", link: '/Technology/iOS-Demo.md'},
						// { text: "Swift", link: '/Technology/Swift.md'}
					]},
					// { text: "技巧", items: [
					// 	{text: "Tips", link:'/Technology/Tips'}
					// ]}
				]
			},
			{
				text: 'Philosophy 🤔', items: [
					{ text: 'Philosophy', link: '/Philosophy/'},
					{ text: '阅读笔记', items: [
						{ text: '宋明理学15讲', link: '/Philosophy/宋明理学15讲' },
						{ text: '新教伦理与资本主义精神', link: '/Philosophy/新教伦理与资本主义精神' },
						// { text: '道德情操论', link: '/Philosophy/道德情操论'}
					]},
					{ text: '我的想法', items:[
						{text : '解释世界', link: '/Philosophy/解释世界.md'},
					]},
					// { text: '哲学史', items:[
					// 	{text : '西方哲学史', link: '/Philosophy/西方哲学史.md'},
					// 	// { text: '中国哲学简史', link:'/Philosophy/哲学史/中国哲学简史.md'},
					// ]}
				]
			},
			{ text: 'Others 😊', items : 
				[
					{text:'Others', link: '/Others/'},
					{text:'更新部署', link: '/Others/更新部署'},
					// {text: '博客列表', link:'/杂谈/博客列表'},
					{text: '记录', items: [
						{text: 'Memory', link:'/Others/Memory'},
						{text: '观影记录', link: '/Others/观影记录'},
					]},
				]
			},
			{ text: 'Github', link: 'https://github.com/butub1/static_page' },
		],
		// sidebar: 'auto'
	},
	plugins:
	{
		//  '@saintic/utterances':
		//   {
		// 	repo: 'butub1/static_page',
		// 	theme: 'github-light',
		// 	issueTerm: 'pathname'
		//   },

		'@vssue/vuepress-plugin-vssue': { // 评论插件
			// 设置 `platform` 而不是 `api`
			platform: 'github',
	
			// 其他的 Vssue 配置
			owner: 'butub1',
			repo: 'static_page',
			locale: 'zh',
			clientId: 'aeb43e2c0641045ef305',
			clientSecret: 'f56fa0ce4f944c59945ede9c8918ea3d2ee203ff',
			// autoCreateIssue: true
		},
		'@vuepress/google-analytics':
		{
			'ga': 'G-5P2R53WFZL' //替换成自己实际申请的ID
		}
	}
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
