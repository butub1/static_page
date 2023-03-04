// 重试
function tryRun (fn, times = 3) {
    let execCount = 1
    
    fn(next)
  
    function next(delay) {
      if (execCount >= times) return
      setTimeout(() => {
        execCount += 1
        fn(next)
      }, delay);
    }
  }
  
  function integrateGitalk(router) {
    const linkGitalk = document.createElement('link')
    linkGitalk.href = 'https://unpkg.com/gitalk@1/dist/gitalk.css'
    linkGitalk.rel = 'stylesheet'
    const scriptGitalk = document.createElement('script')
    scriptGitalk.src = 'https://unpkg.com/gitalk@1/dist/gitalk.min.js'
  
    document.body.appendChild(linkGitalk)
    document.body.appendChild(scriptGitalk)
  
    router.afterEach((to, from) => {
      // 页面滚动，hash值变化，也会触发afterEach钩子，避免重新渲染
      if (to.path === from.path) return
      
      // 已被初始化则根据页面重新渲染 评论区
      tryRun((next) => {
        const $page = document.querySelector('.page')
        if ($page && window.Gitalk) {
          // 如果不setTimeout取到是上一篇文档的标题
          setTimeout(() => {
            renderGitalk($page, to.path)
          }, 1);
        } else {
          next(500)
        }
      }, 10)
    })
  
    function renderGitalk(parentEl, path) {
      // 移除旧节点，避免页面切换 评论区内容串掉
      const oldEl = document.getElementById('comments-container');
      oldEl && oldEl.parentNode.removeChild(oldEl);
  
      const commentsContainer = document.createElement('div')
      commentsContainer.id = 'comments-container'
      commentsContainer.classList.add('content')
      commentsContainer.style = 'padding: 0 30px;'
      parentEl.appendChild(commentsContainer)
  
      const gitalk = new Gitalk({
        clientID: 'aeb43e2c0641045ef305', // 第一步注册 OAuth application 后获取到的 Client ID
        clientSecret: 'f56fa0ce4f944c59945ede9c8918ea3d2ee203ff', // 第一步注册 OAuth application 后获取到的 Clien Secret
        repo: 'static_page',
        owner: 'butub1',
        admin: ['butub1'],
        id: location.pathname,      // Ensure uniqueness and length less than 50
        distractionFreeMode: false  // Facebook-like distraction free mode
      })
      gitalk.render('comments-container')
    }
  }
  
  export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData // 站点元数据
  }) => {
    try {
      // 生成静态页时在node中执行，没有document对象
      document && integrateGitalk(router)
    } catch (e) {
      console.error(e.message)
    }
  }