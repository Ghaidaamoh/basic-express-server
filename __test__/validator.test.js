'use strict';

const supertest = require('supertest');
const validatorMiddleware = require('../src/middleware/validator');

describe('express server', () => {
    
    let req = {
        query:{
            name:'ghaidaa'
        }
    };
    let res = {};
    let next = jest.fn();
    
    it('Should test Middleware validate', () => {

        validatorMiddleware(req, res, next);

        expect(next).toHaveBeenCalledWith();
    });

  
});
