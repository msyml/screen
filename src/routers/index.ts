import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: () => import('views/Main.vue'),
            meta: {
                title: "首页"
            }
        },
        {
            path: "/production",
            component: () => import('views/production/production.vue'),
            meta: {
                title: "抹上一抹凉 - 生产"
            }
        }
    ]
})

router.beforeEach((to: any, from: any, next: () => any) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default router