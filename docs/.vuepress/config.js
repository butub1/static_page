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
			{ text: '杂谈', link: '/杂谈/' },
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
			{ text: 'External', link: 'https://google.com' },
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
