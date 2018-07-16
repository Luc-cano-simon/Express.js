var express = require('express')
var bodyParser = require('body-parser');
var app = express()



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use(express.static('public')); // fonction pour relier le HTML 

app.get('/', function (req, res) {
	res.send()
})

app.listen(3300, function () 
{	
	console.log('Example app listening on port 3300!')
})


var user =
{
	login: 'Luc',
	mdp: 'luc1803',
}

app.post('/', function (req, res)
{
	console.log(req.body.login);

	if (user.login === req.body.login && user.mdp === req.body.motdepasse) 
	{
		res.send('success');
		
	}else
	{
		res.send("error");
		
	}
});






