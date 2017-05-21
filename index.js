const express = require('express');
let app = new express();
const os = require('os');
const publicIp = require('public-ip');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
   /*let interfaces = os.networkInterfaces();
   let addresses = [];
   for (let k in interfaces) {
      for (let k2 in interfaces[k]) {
         let address = interfaces[k][k2];
         if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
         }
      }
   }
   // console.log(addresses);
   // const software = new os.cpus();
   // const ip = os.networkInterfaces();
   // const host = os.constants;
   // console.log(software)
   // console.log(ip)
   // console.log(host)
   console.log(req.headers['x-forwarded-for'] || req.connection.remoteAddress)*/

   publicIp.v4().then(ip => {
      console.log(ip);
      //=> '46.5.21.123'
   });

   /*publicIp.v6().then(ip => {
      console.log(ip);
      //=> 'fe80::200:f8ff:fe21:67cf'
   });*/
   res.send('fuck u');
})

app.listen(port, (req, err) => {
   if (!err)
      console.log("listening to the port " + port)
})
