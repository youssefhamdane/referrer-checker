const express = require("express");
const app = express();
const port = process.env.PORT || 3001;



app.get('/', (req, res) => {
  res.send('Host : '+req.get('Host')+' @hostname : '+req.hostname+' @ip : '+req.ip+' @referrer : '+req.get('Referrer'));
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
