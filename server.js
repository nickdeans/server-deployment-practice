'use strict';

const { response } = require('express');
const express = require('express');
const app = express();

app.get('/', (request,response,next) => {
    response.send('hello');
});

app.get('/foo', (request,response,next) => {
    let responseObject = {
        number: 10,
        string: 'hello world'
    }
    response.json(responseObject);
});

function start(port){
    app.listen(port, () => console.log('App is listening on port ::', port));
}

module.exports = {
    app: app,
    start: start,
};