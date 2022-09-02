let express = require('express');
let app = express();
app.use(express.static(__dirname+'/dist/startuptech'));

app.get('/*', (req, res)=> {
    res.sendFile(__dirname+'/dist/startuptech/index.html');
});

app.listen(process.env.PORT || 8080);
    