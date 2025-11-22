// depender de abstracciones 

// ejemplo incorrrecto 
const axios = require('axios');
axios.get("url");

// ejemplo correcto
httpClient.get("url");

// inyeccion de dependencias
class TodoService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
}

// aplicando el DIP 
class AxiosAdapter {
  get(url, callback) {
    axios.get(url).then(callback);
  }
}

class TodoService {
  constructor(client) {
    this.client = client;
  }

  requestTodos(callback) {
    this.client.get("https://url.com", callback);
  }
}
