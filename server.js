var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var friends = [
    {
        name: 'Ahmed',
        photo: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg',
        scores: [5,1,4,4,5,1,2,5,4,1]
    },{
        name: 'Jacob',
        photo: 'https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg',
        scores: [4,2,5,1,3,2,2,1,3,2]
    },{
        name: 'Jeremiah',
        photo: 'https://avatars2.githubusercontent.com/u/8504998?v=3&s=460',
        scores: [5,2,2,2,4,1,3,2,5,5]
    },{
        name: 'Louis',
        photo: 'https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg',
        scores: [3,3,4,2,2,1,3,2,2,3]
    },{
        name: 'Lou',
        photo: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg',
        scores: [4,3,4,1,5,2,5,3,1,4]
    },{
        name: 'Jordan',
        photo: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg',
        scores: [4,4,2,3,2,2,3,2,4,5]
    },{
        name: 'Joe',
        photo: 'https://google.com',
        scores: [2,3,2,3,4,3,2,2,3,3]
    }
];
app.get('/', function (req,res) {
    res.sendFile(path.join(__dirname, 'public/home.html'));
})
app.get('/:stuff',function (req,res) {
    var input = req.params.stuff;
    switch (input) {
        case 'survey':
            res.sendFile(path.join(__dirname,'public/survey.html'));
            break;
        default:
            res.sendFile(path.join(__dirname,'public/home.html'));
            break;
    }
});
app.get('/api/friends', function(req,res) {
    return res.json(friends);
});

app.post('/api/friends', function(req,res) {
    var newFriend = req.body;
    friends.push(newFriend);
    res.json(newFriend);
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});