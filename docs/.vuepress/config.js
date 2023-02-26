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
					{ text: "iOS", link: '/iOS/Description.md'},
					{ text: "iOS-Demo", link: '/iOS/iOS-Demo.md'},
					{ text: "UIImageView 翻译", link: '/iOS/UIImageView翻译.md'}
				]
			},
			{
				text: 'Tech', items: [
					{ text: "Tech", link: '/Tech/Description.md'},
					{ text: 'DIP', link: '/Tech/DIP' }
				]
			},
			{
				text: '哲学', items: [
					{ text: '哲学', link: '/哲学/Description.md'},
					{ text: '宋明理学15讲', link: '/哲学/宋明理学15讲' },
					{ text: '新教伦理与资本主义精神', link: '/哲学/新教伦理与资本主义精神' },
					{ text: '我的想法', link: '/哲学/我的想法.md'},
					{ text: '鸡汤', link:'/哲学/鸡汤.md'},
				]
			},
			{ text: '杂谈', items : 
				[
					{text:'构建初衷', link: '/杂谈/'},
					{text:'更新部署', link: '/杂谈/更新部署'},
					{text: '记忆碎片', link: '/杂谈/记忆碎片'},
					{text: '博客列表', link:'/杂谈/博客列表'},
					{text: '记录', items: [
						{text: '杭州-北京', link: '/杂谈/杭州-北京.md'}
					]},
					

				]
			},
			{ text: 'github', link: 'https://github.com/butub1/static_page' },
		],
		sidebar: 'auto'
	}
}
