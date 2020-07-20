const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {

    beforeEach(async () => {
        await connection.migrate.rollback(); // Zera o banco
        await connection.migrate.latest(); // Constroi o banco
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name : "APAD2",
            email : "contato@teste.com",
            whatsapp : "4700000000",
            city : "Rio do Sul",
            uf : "SC"
        });

        console.log(response.body);
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveLength(8);

    afterAll(async () => {
        await connection.destroy();
    });

})