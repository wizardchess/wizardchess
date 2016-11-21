const express = require('express');
const app = express();
const database = require('./database');
const routes = require('./routes');
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', routes);

database.sync()
        .then(() => {
          console.log('Database is connected.')
          app.listen(3000, () => console.log('Server listening on port 3000.'));
        })
        .catch(err => console.log(`Unable to connect with the following error: \n${err}`));

module.exports = database
