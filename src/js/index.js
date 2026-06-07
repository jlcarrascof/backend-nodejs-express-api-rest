const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('My Express Server using JavaScript');
});

app.get('/new-route', (req, res) => {
  res.send('This is a new route - using JavaScript');
})

routerApi(app);

app.listen(port, () => {
  console.log('App Node with JavaScript running at port ' + port);
});

