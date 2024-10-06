import { DaprServer } from 'dapr-client'; 

  

const DAPR_HOST = process.env.DAPR_HOST || "http://localhost:9411"; 

const DAPR_HTTP_PORT = process.env.DAPR_HTTP_PORT || "3500"; 

const SERVER_HOST = process.env.SERVER_HOST || "127.0.0.1"; 

const SERVER_PORT = process.env.APP_PORT || 3000; 

  

async function main() { 

  const server = new DaprServer(SERVER_HOST, SERVER_PORT, DAPR_HOST, DAPR_HTTP_PORT); 

  

  // Dapr subscription routes orders topic to this route 

  server.pubsub.subscribe("orderpubsub", "orders", (data) => console.log("Subscriber received: " + JSON.stringify(data))); 

  

  await server.start(); 

} 

  

main().catch(e => console.error(e)); 