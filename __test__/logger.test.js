const { describe, beforeEach, afterEach } = require('@jest/globals')
const loggerMiddleware = require('../src/middleware/logger');

describe('Logger MiddleWare', () => {
    let spyData;
    let req = {};
    let res = {};
    let next = jest.fn();

    beforeEach(() => {
        spyData = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        spyData.mockRestore();
    });


    it('Should Log To The Console', () => {
        loggerMiddleware(req, res, next);

        expect(spyData).toHaveBeenCalled();
    });

    it('Should Move To The Next Middle Ware', () => {
        
        loggerMiddleware(req, res, next);
        
        expect(next).toHaveBeenCalledWith();
    });

})