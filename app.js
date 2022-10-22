var binanceSocket = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

binanceSocket.onopen = function(e) {
    alert("[open] Connection established");
    alert("Sending data to server");
};

binanceSocket.onmessage = function(event) {
    alert(`[message] Data received from: ${event.data}`);
};

binanceSocket.onclose = function(event) {
    if (event.wasClean){
        alert(`[close] Connection closed celarly, code=${event.code} reason=${event.reason}`);
    } else {
        alert('[close] Connection terminated');
    }
};

binanceSocket.onerror = function(error) {
    alert(`[error] ${error.message}`);
};



var binancePrice = document.getElementById('trades');
var test = document.getElementById('test');
        
binanceSocket.onmessage = function (event){
               
    var messageObject = JSON.parse(event.data);
    console.log(messageObject.p);
        
    //binancePrice.append(messageObject.p + " "); 
    test.append(" ")
    
    if (test != messageObject.p){
        test.append(messageObject.p + " ")
    }
              
};


