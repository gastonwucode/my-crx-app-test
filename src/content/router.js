// router.js

import { createRouter, createWebHistory } from 'vue-router'
import Message from './Message.vue'


const routes = [
    {
        path: '/',
        name: 'Message',
        component: Message
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
