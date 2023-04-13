const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}))
const MongoClient = require('mongodb').MongoClient;

var db;
MongoClient.connect('mongodb+srv://shinsion:dr0907@cluster0.p1jxo64.mongodb.net/?retryWrites=true&w=majority', function(에러, client){
	if (에러) return console.log(에러)

	db = client.db('todoapp');

	db.post.insertOne( {이름 : 'John', 나이 : 20} , function(에러, 결과){
		console.log('저장완료');
	});

	app.listen(8080, function() {
	  console.log('listening on 8080')
	});
  });


app.listen(8080, function(){
	console.log('listening on port 8080');
});

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.get('/write', function(req, res){
	res.sendFile(__dirname + '/write.html');
});

app.post('/add', function(req, res){
	res.send('전송완료');
	console.log(req.body);
});