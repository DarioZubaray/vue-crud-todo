import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            redirect: 'todos'
        },
        {
            path: '/todos',
            name: 'todos',
            component: () =>
                import ('./views/Todos.vue')
        },
        {
            path: '/todos/create',
            name: 'todos-create',
            component: () =>
                import ('./views/TodoCreate.vue')
        },
        {
            path: '/todos/:id/update',
            name: 'todos-update',
            component: () =>
                import ('./views/TodoUpdate.vue')
        }
    ]
})