import http from 'http';
import { TodolistServices } from './todolist-services.mjs';

const services = new TodolistServices()

const server = http.createServer((request, response) => {

    response.setHeader("Content-Type", "application/json")

    if (request.method === "GET") {
        services.getTodoList(request, response)
    } else if (request.method === "POST") {
        services.createTodoList(request, response)
    } else if (request.method === "PUT") {
        services.updateTodoList(request, response)
    } else if (request.method === "DELETE") {
        services.deleteTodoList(request, response)
    }

})

server.listen(3000)