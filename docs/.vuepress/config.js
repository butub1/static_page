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
			{ text: 'iOS', link: '/iOS/' },
			{
				text: 'Tech', items: [
					{ text: 'DIP', link: '/Tech/DIP' }
				]
			},
			{
				text: '哲学', items: [
					{ text: '宋明理学15讲', link: '/哲学/宋明理学15讲' },
					{ text: '新教伦理与资本主义精神', link: '/哲学/新教伦理与资本主义精神' }
				]
			},
			{ text: '杂谈', link: '/杂谈/' },
			{ text: 'github', link: 'https://github.com/butub1/static_page' },
		],
		sidebar: 'auto'
		/*{
		  '/' : [
			  '/',
			  '/哲学/'
		  ],
		  '/哲学/' : [
			  '宋明理学15讲'
		  ]
		}*/
	}
}
