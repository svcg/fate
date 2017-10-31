//home页面
import Index from './menubar/Index.vue'

export default {
    // mode: 'history',
    //history
    linkActiveClass: 'active',
    routes: [
        //默认为home页面为主页
        // { path: '/', redirect: '/heart' },
        //home页面路由
        {path: '/', component: Index},
        //list页面路由
        {path: '/login', name: 'login', component: resolve=>require(['./user/Login.vue'], resolve)},
        {
            path: '/contact',
            meta: {
                requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
            },
            name: 'contact',
            component: resolve=>require(['./contact/Contact.vue'], resolve)
        },
        {path: '/infringement', name: 'infringement', component: resolve=>require(['./contact/Infringe.vue'], resolve)},
        {path: '/opsspecs', name: 'opsspecs', component: resolve=>require(['./contact/Opsspecs.vue'], resolve)},
        {path: '/agreement', name: 'agreement', component: resolve=>require(['./contact/Agreement.vue'], resolve)},
        {path: '/about', name: 'about', component: resolve=>require(['./contact/About.vue'], resolve)},
        {path: '/expro', name: 'expro', component: resolve=>require(['./menubar/Expro.vue'], resolve)},
        {
            path: '/account-status',
            name: 'account-status',
            component: resolve=>require(['./menubar/AccountStatus.vue'], resolve)
        },
        {path: '/fnmanage', name: 'fnmanage', component: resolve=>require(['./menubar/Fnmanage.vue'], resolve)},
        {path: '/wenda', name: 'wenda', component: resolve=>require(['./menubar/Wenda.vue'], resolve)},
        {path: '/articles', name: 'articles', component: resolve=>require(['./menubar/Article.vue'], resolve)},
        {
            path: '/articles/create',
            name: 'articles-create',
            component: resolve=>require(['./articles/Create.vue'], resolve)
        },
        {path: '/comment', name: 'comment', component: resolve=>require(['./menubar/Comment.vue'], resolve)},
        {
            path: '/resource-manager',
            name: 'resource-manager',
            component: resolve=>require(['./menubar/ResourceManager.vue'], resolve)
        },
        {
            path: '/account-info',
            name: 'account-info',
            component: resolve=>require(['./menubar/AccountInfo.vue'], resolve)
        },
        {path: '/custom-menu', name: 'custom-menu', component: resolve=>require(['./menubar/CustomMenu.vue'], resolve)},
        {
            path: '/private-letter',
            name: 'private-letter',
            component: resolve=>require(['./menubar/PrivateLetter.vue'], resolve)
        },
        {
            path: '/content-analysis',
            name: 'content-analysis',
            component: resolve=>require(['./menubar/ContentAnalysis.vue'], resolve)
        },
        {
            path: '/audience-analysis',
            name: 'audience-analysis',
            component: resolve=>require(['./menubar/AudienceAnalysis.vue'], resolve)
        },
        {
            path: '/recommend-factor',
            name: 'recommend-factor',
            component: resolve=>require(['./menubar/RecommendFactor.vue'], resolve)
        },
        {path: '/pixabay', name: 'pixabay', component: resolve=>require(['./menubar/Pixabay.vue'], resolve)},
        {path: '/donate', name: 'donate', component: resolve=>require(['./menubar/Donate.vue'], resolve)},
        {path: '/faq', name: 'faq', component: resolve=>require(['./menubar/Faq.vue'], resolve)},
        {path: '/announces', name: 'announces', component: resolve=>require(['./menubar/Announce.vue'], resolve)},
        {path: '/video', name: 'video', component: resolve=>require(['./quone/Video.vue'], resolve)},
        //list页面路由
        {path: '/news/:num', name: 'article', component: resolve=>require(['./user/Login.vue'], resolve)},
    ],
    scrollBehavior (to, from, savedPosition) {
        return {x: 0, y: 0}
    }
}