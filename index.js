const express = require('express');
let app = new express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
   
   const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress ;
   const lang = req.headers['accept-language'];
   const softName = req.headers['user-agent'].match(/\(([\w;\s]+)\)/);

   const headerObejct = {
      "ipaddress": ipAddress,
      "language": lang,
      "software": softName[1]
   }
   res.send(headerObejct);
})

app.listen(port, (req, err) => {
   if (!err)
      console.log("listening to the port " + port)
})
