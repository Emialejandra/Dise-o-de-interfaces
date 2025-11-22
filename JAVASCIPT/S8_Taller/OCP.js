//Aplicando OCP 
const axios = require('axios');

class TodoExternalService{
  requestTodoItems(callback){
    const url = 'https://jsonplaceholder.typicode.com/todos/';

    axios
        .get(url)
        .then(callback)
    }
}
 
new TodoExternalService()
  .requestTodoItems(response => console.log(response.data))

// patron adaptador
class ClientWrapper{
 makeGetRequest(url, callback){
 return axios
 .get(url)
 .then(callback);
 }
}

// principio abierto/cerrado 
const axios = require('axios');

export class ClientWrapper{
makeGetRequest(url, callback){
return axios
.get(url)
.then(callback);
}
}

//domain/TodoService
export class TodoService{
client;

constructor(client){
this.client = client;
}

requestTodoItems(callback){
const url = 'https://jsonplaceholder.typicode.com/todos/';
this.client.makeGetRequest(url, callback)
}
}

//index
import {ClientWrapper} from './infrastructure/ClientWrapper'
import {TodoService} from './domain/TodoService'

const start = () => {
const client = new ClientWrapper();
const todoService = new TodoService(client);

todoService.requestTodoItems(response => console.log(response.data))
}
start();

// patron adaptador 
export class ClientWrapper{
 makeGetRequest(url, callback){
 return fetch(url)
 .then(response => response.json())
 .then(callback)
 }
}
