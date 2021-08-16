'use strict';

module.exports = (req, res, next) => {
    const name= req.query.name
    if(name){
    next();
}else{
    next('name did not found 😭'); 
}

}