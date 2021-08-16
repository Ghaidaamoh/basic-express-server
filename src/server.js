'use strict';
const express=require('express');
const app = express();
app.use(express.json());

const notFoundHnalder = require('./error-handler/404.js');
const errorHandler = require('./error-handler/500');
const validatorMiddleware = require('./middleware/validator');
const loggerMiddleware = require('./middleware/logger');
app.use(loggerMiddleware);

app.get('/',(req,res)=>{
res.send('welcome to my app ')

})

app.get('/person',validatorMiddleware,(req,res)=>{
        let data = {
            name: req.query.name,
            age: req.query.age,
            
        }
        
        res.status(200).json(data)
    })
   
    app.get('/data', (req, res) => {
        let data = {
            city: 'amman',
            wheather: 'sunny',
            time: new Date().toString()
        }
        res.status(200).json(data);
    });
    
    app.get('/bad', (req, res, next) => {
        next('error from bad end point');
    });
    
    app.use('*', notFoundHnalder);
    app.use(errorHandler);

function start(port) {
    app.listen(port, () => console.log(`Server started on port ${port}`));
}

module.exports = {
    start,
    app
}
