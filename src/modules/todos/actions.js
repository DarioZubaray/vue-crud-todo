import Vue from 'vue'

export async function fetchTodo({ commit }) {
    try {
        const { data } = await Vue.axios({
                url: '/todos'
            })
            //commit('setTodos', data)
        commit('todos/setTodos', data, { root: true })
    } catch (e) {
        commit('todos/setError', e.message, { root: true })
    } finally {
        console.log('La peticion fetchTodo ha finalizado')
    }
}

export async function addTodo({ commit, dispatch }, todo) {
    try {
        await Vue.axios({
            url: '/todos',
            method: 'POST',
            data: {
                id: Date.now(),
                text: todo.text,
                done: false
            }
        })
        dispatch('fetchTodos')
    } catch (e) {
        commit('todos/setError', e.message, { root: true })
    } finally {
        console.log('La peticion addTodo ha finalizado')
    }
}

export async function updateTodo({ commit }, todo) {
    try {
        await Vue.axios({
            url: `/todos/${todo.id}`,
            method: 'PUT',
            data: {
                id: todo.id,
                text: todo.text,
                done: todo.done
            }
        })

    } catch (e) {
        commit('todos/setError', e.message, { root: true })
    } finally {
        console.log('La peticion updateTodo ha finalizado')
    }
}

export async function updateTodoStatus({ commit }, todo) {
    try {
        await Vue.axios({
            url: `/todos/${todo.id}`,
            method: 'PUT',
            data: {
                id: todo.id,
                text: todo.text,
                done: !todo.done
            }
        })

    } catch (e) {
        commit('todos/setError', e.message, { root: true })
    } finally {
        console.log('La peticion updateTodo ha finalizado')
    }
}

export async function removeTodo({ commit, dispatch }, id) {
    try {
        await Vue.axios({
            url: `/todos/${id}`,
            method: 'DELETE'
        })
        dispatch('fetchTodos')
    } catch (e) {
        commit('todos/setError', e.message, { root: true })
    } finally {
        console.log('La peticion removeTodo ha finalizado')
    }
}