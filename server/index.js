const WebSocket = require('ws');
const jsonData = require("./data.json")

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  console.log('Client Connected...');
  ws.send(JSON.stringify(jsonData))
  ws.on('message', function message(data) {
    console.log('received: %s', data);
    ws.send(JSON.stringify({"status":"ok"}))
  });
  ws.on('close',function close(data){
    console.log('Client got disconnected')
  })
});

console.log('🚀 running on port 8080...')