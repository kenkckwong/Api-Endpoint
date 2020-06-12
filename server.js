var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');
var app = express();

app.set('port', process.env.PORT || 5000);
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/api-endpoint', function(request, response) {
    var name = request.query.name;
    
      var options = { 
            title: 'Title',
            imageUrl: 'https://image.flaticon.com/icons/png/512/61/61456.png',
            Contact: [ {id: 12345, name: 'King Lai'},{id: 12346, name: 'King King Lai'}],
            show: true 
        };
    
    response.send(options.json());
    
});

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
