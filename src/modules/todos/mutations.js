export function setTodos(state, todos) {
    state.todos = todos
}

export function setTodo(state, todo) {
    state.selectTodo = todo
}

export function updateTodoStatus(state, payload) {
    const todo = state.todo.find(t => t.id === payload.id)
    if (todo) {
        todo.done = !todo.done
    }
}

export function setError(status, payload) {
    status.error = true
    status.errorMessage = payload
    status.todos = []
}