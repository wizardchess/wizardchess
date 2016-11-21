const express = require('express');
const app = express();
const database = require('./database')

app.use(express.static(__dirname + '/../public'));

database.sync()
        .then(() => {
          console.log('Database is connected.')
          app.listen(3000, () => console.log('Server listening on port 3000.'));
        })
        .catch(err => console.log(`Unable to connect with the following error: ${err}`));
