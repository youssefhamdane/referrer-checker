const express = require("express");
const app = express();
const port = process.env.PORT || 3001;



app.get('/', (req, res) => {
  res.send('Host : '+req.get('Host'));
  
  res.send('@hostname : '+req.hostname);
  
  res.send('@ip : '+req.ip);
  
  res.send('@referrer : '+req.get('Referrer'));
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
