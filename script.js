const http = require('http');
const ws = require('ws');

let socket = new WebSocket("wss://stream.binance.com:9443/btcusdt@trade");
socket.onopen = function(e) {
    alert("[open] Соединение установлено");
    alert("Отправляем данные на сервер");
    socket.send("Меня зовут Джон");
  };
  
  socket.onmessage = function(event) {
    alert(`[message] Данные получены с сервера: ${event.data}`);
  };
  
  socket.onclose = function(event) {
    if (event.wasClean) {
      alert(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
    } else {
      // например, сервер убил процесс или сеть недоступна
      // обычно в этом случае event.code 1006
      alert('[close] Соединение прервано');
    }
  };
  
  socket.onerror = function(error) {
    alert(`[error] ${error.message}`);
  };
