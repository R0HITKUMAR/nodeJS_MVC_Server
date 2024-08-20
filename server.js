import app from "./src/app.js";
import config from "./src/config/config.js";

await app.listen(config.PORT, config.HOST, (err) => {
  if(err){
    return console.log(err,'error');
  }
  console.log(`Server is Live on http://${config.HOST}:${config.PORT}`)
})
