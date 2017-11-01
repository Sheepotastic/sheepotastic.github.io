// For use with Node.js
var ms = require('./minestat');
ms.init('sheepotastic.shservers.net', 25568, function(result)
{
  console.log("Minecraft server status of " + ms.address + " on port " + ms.port + ":");
  if(ms.online)
  {
    console.log("Server is online running version " + ms.version + " with " + ms.current_players + " out of " + ms.max_players + " players.");
  }
  else
  {
    console.log("Server is offline!");
  }
});