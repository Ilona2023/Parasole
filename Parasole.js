const http = require('http');
const port = process.env.PORT || 8080;


const requestListener = function (req, res) {
  res.writeHead(200);
res.end(`<html>
<style>
h1 {position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);}
div {
    height:100vh;
    background: linear-gradient(to bottom, #ffff66 9%, #ff6600 100%)
}
</style>
<div>
<h1 style="text-align:center;">PARASOLE.GOV<br><a href=https://parasole-gov-3g8m.onrender.com>parasole.gov</a><br>nr tel 987 654 321</h1>
</div>
</body>
</html>`);
}
