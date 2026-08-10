const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorHandler } = require('./middlewares/error.handler')

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

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log('App Node with JavaScript running at port ' + port);
});

