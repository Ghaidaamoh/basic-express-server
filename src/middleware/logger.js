'use strict';

module.exports = (req, res, next) => {
    console.log('Request LOGER:', req.method, req.path);
    next();
}