const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const controllers = require('./controllers/programmes-controller');
const expressLayouts = require('express-ejs-layouts');

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/', express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Router
app.use('/', controllers);

//Server console
app.use((req, res, next) => {
    console.log('%s request to %s from %s', req.method, req.path, req.ip);
    next();
});

//Server
const server = app.listen(port, () => {
    console.log(`BBC API is working on port ${port}`);
});

module.exports = server;
