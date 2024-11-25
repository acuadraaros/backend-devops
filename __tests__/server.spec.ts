import app from '../src/server.js';
import request from 'supertest';

describe("Batería de pruebas del servidor", () => {

    test("Servidor en endpoint /", async () => {
        await request(app)
            .get('/')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toContain("Hola mundo al usuario");
            });
    });

    test("Servidor en endpoint /api-key", async () => {
        await request(app)
            .get('/api-key')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toContain("la apikey de mi aplicacion es:");
            });
    });

    test("Servidor en endpoint /operar", async () => {
        await request(app)
            .get('/operar?operacion=suma&num1=10&num2=20')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("El resultado de la operacion es: 30");
            });

        await request(app)
            .get('/operar?operacion=resta&num1=10&num2=5')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("El resultado de la operacion es: 5");
            });
    });

    test("Servidor en endpoint /palindromo", async () => {
        await request(app)
            .get('/palindromo?frase=anita%20lava%20la%20tina')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("Hola, La frase ingresada es palindromo");
            });

        await request(app)
            .get('/palindromo?frase=hola%20mundo')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("Hola, La frase ingresada no es palindromo");
            });
    });

    test("Servidor en endpoint /primo", async () => {
        await request(app)
            .get('/primo?numero=7')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("Hola, el numero ingresado es un numero primo");
            });

        await request(app)
            .get('/primo?numero=10')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("Hola, el numero ingresado no es un numero primo");
            });
    });

});
