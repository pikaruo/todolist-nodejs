export class TodolistServices {

    todolist = ["Pina", "Pikaruo", "Yohoho"]

    getJsonTodolist() {
        return JSON.stringify({
            code: 200,
            status: "OK",
            data: this.todolist.map((value, index) => {
                return {
                    id: index,
                    todo: value
                }
            })
        })
    }

    getTodoList(request, response) {
        response.write(this.getJsonTodolist())
        response.end()
    }

    createTodoList(request, response) {
        request.addListener("data", data => {
            const body = JSON.parse(data.toString())
            this.todolist.push(body.todo)

            response.write(this.getJsonTodolist())
            response.end()
        })
    }

    updateTodoList(request, response) {
        request.addListener("data", data => {
            const body = JSON.parse(data.toString())
            if (this.todolist[body.id]) {
                this.todolist[body.id] = body.todo
            }

            response.write(this.getJsonTodolist())
            response.end()
        })
    }

    deleteTodoList(request, response) {
        request.addListener("data", data => {
            const body = JSON.parse(data.toString())
            if (this.todolist[body.id]) {
                this.todolist.splice(body.id, 1)
            }

            response.write(this.getJsonTodolist())
            response.end()
        })
    }

}