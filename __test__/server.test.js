'use strict';
const supertest = require('supertest');
const server = require('../src/server');
const request = supertest(server.app);

describe('express server', () => {
    let spyData;
    beforeEach(() => {
        spyData = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        spyData.mockRestore();
    });

    it('it check the person if works successfully', async () => {
        // arrange
        let param = '/person?name=ghaidaa';
        let status = 200;

        // act
        const response = await request.get(param);
        // assert
        expect(response.status).toBe(status);
        expect(typeof response.body).toEqual('object');
    });
    
    it('shoud return 404 on a bad method', async () => {
        // arrange
        let method = '/person?name=alaa';
        let status = 404;
        
        // act
        const response = await request.post(method);
        // assert
        expect(response.status).toBe(status);
    });

    it('should check 500 errors', async () => {
        // arrange
        let param = '/bad';
        let status = 500;
        // act
        const response = await request.get(param);
        // assert
        expect(response.status).toBe(status);
        expect(response.body.route).toBe(param);
    });

    it('shoud check 404 not found errors', async () => {
        // arrange
        let param = '/notfound';
        let status = 404;
        // act
        const response = await request.get(param);
        // assert
        expect(response.status).toBe(status);
    });
});

