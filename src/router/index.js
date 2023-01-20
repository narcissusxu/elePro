import { createRouter, createWebHashHistory } from "vue-router";

const routes  = [
    {
        path: "/",
        name: "home",
        component: () => import("../components/HelloWorld.vue"),
        children: [
            {
                path: 'reader',
                name: 'READER',
                component: () => import("../components/functions/EleReader.vue")
            },
            {
                path: 'imager',
                name: 'IMAGER',
                component: () => import("../components/functions/EleImg.vue")
            },
            {
                path: 'videor',
                name: 'VIDEOR',
                component: () => import("../components/functions/EleVideo.vue")
            },
            {
                path: 'message',
                name: 'MESSAGE',
                component: () => import("../components/messages/EleMessage.vue")
            },
        ]
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

// router.beforeEach((to, from) => {
//
//     // 路由守卫逻辑
//
//
//     // 通过 return turn;
//     // 不通过 return false;
//     return true;
// });

export default router;
