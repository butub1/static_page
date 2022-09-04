module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: "/static_page/",
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    logo: '/logo.png',
     nav: [
      { text: 'Home', link: '/' },
      { text: '杂谈', link: '/杂谈/' },
      { text: 'External', link: 'https://google.com' },
    ]
  }
  
}
