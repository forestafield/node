const WebSocket = require('ws');
const WebSocketServer = WebSocket.Server;

const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', (ws) => {
  console.log('Client connected');
  
  ws.on('message', (message) => {
    console.log('Received:', message);
    // You can parse the MIDI message and handle it here.
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server running on ws://localhost:3000');