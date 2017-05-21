const express = require('express');
let app = new express();
const os = require('os');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {

   // const software = new os.cpus();
   // const ip = os.networkInterfaces();
   // const host = os.constants;
   // console.log(software)
   // console.log(ip)
   // console.log(host)
   
   const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress ;
   console.log(req.ip)

   res.send(req.ip);
})

app.listen(port, (req, err) => {
   if (!err)
      console.log("listening to the port " + port)
})
