import { describe, test, expect } from "@jest/globals";
import { suma, restar, multiplicar, dividir, potencia, factorial, operar } from "../../src/app/calculadora";

describe("Batería de pruebas de la calculadora", () => {
    test("Prueba básica", () => {
        expect(1).toBe(1);
    });

    // Pruebas para la función suma
    test("Suma en la calculadora", () => {
        expect(suma(1, 2)).toBe(3);
        expect(suma(5, 5)).toBe(10);
        expect(suma(1, 5)).not.toBe(0);

        let a: any = 1;
        let b: any = "a";
        expect(suma(a, b)).toBeNaN();
        b = undefined;
        expect(() => suma(a, b)).toThrowError("La suma requiere dos argumentos.");
    });

    // Pruebas para la función restar
    test("Resta en la calculadora", () => {
        expect(restar(5, 2)).toBe(3);
        expect(restar(15, 5)).toBe(10);
        expect(restar(10, 5)).not.toBe(0);

        let a: any = 1;
        let b: any = "a";
        expect(restar(a, b)).toBeNaN();
        b = undefined;
        expect(() => restar(a, b)).toThrowError("La resta requiere dos argumentos.");
    });

    // Pruebas para la función multiplicar
    test("Multiplicación en la calculadora", () => {
        expect(multiplicar(2, 3)).toBe(6);
        expect(multiplicar(0, 10)).toBe(0);
        expect(multiplicar(7, 3)).not.toBe(0);

        let a: any = 1;
        let b: any = undefined;
        expect(() => multiplicar(a, b)).toThrowError("La multiplicación requiere dos argumentos.");
    });

    // Pruebas para la función dividir
    test("División en la calculadora", () => {
        expect(dividir(6, 2)).toBe(3);
        expect(dividir(-10, 2)).toBe(-5);
        expect(dividir(10, 2)).not.toBe(0);

        let a: any = 10;
        let b: any = 0;
        expect(() => dividir(a, b)).toThrowError("División por cero no permitida");
        b = undefined;
        expect(() => dividir(a, b)).toThrowError("La división requiere dos argumentos.");
    });

    // Pruebas para la función potencia
    test("Potencia en la calculadora", () => {
        expect(potencia(2, 3)).toBe(8);
        expect(potencia(5, 0)).toBe(1);
        expect(potencia(2, -2)).toBe(0.25);

        let a: any = 2;
        let b: any = undefined;
        expect(() => potencia(a, b)).toThrowError("La operación de potencia requiere dos argumentos.");
    });

    // Pruebas para la función factorial
    test("Factorial en la calculadora", () => {
        expect(factorial(0)).toBe(1);
        expect(factorial(1)).toBe(1);
        expect(factorial(5)).toBe(120);

        let a: any = -1;
        expect(() => factorial(a)).toThrowError("El factorial solo se define para enteros positivos o cero");

        a = 2.5;
        expect(() => factorial(a)).toThrowError("El factorial solo se define para enteros positivos o cero");
    });

    // Pruebas para la función operar
    test("Operar en la calculadora", () => {

        expect(() => operar("suma", undefined, 5)).toThrowError(
            "El primer argumento 'a' es obligatorio y no puede ser undefined."
        );

        expect(operar("suma", 10, 20)).toBe(30);
        expect(operar("resta", 5, 2)).toBe(3);
        expect(operar("multiplicacion", 7, 3)).toBe(21);
        expect(operar("division", 10, 2)).toBe(5);
        expect(operar("potencia", 2, 3)).toBe(8);
        expect(operar("factorial", 5)).toBe(120);

        expect(() => operar("factorial", -5)).toThrowError("El factorial solo se define para enteros positivos o cero");
        expect(() => operar("division", 10, 0)).toThrowError("División por cero no permitida");
        expect(() => operar("potencia", 5)).toThrowError("La operación de potencia requiere dos argumentos.");

        expect(() => operar("operacionInvalida", 10, 20)).toThrowError("Operación no válida: operacionInvalida");
        expect(() => operar("", 10, 20)).toThrowError("Operación no válida: ");
    });
});
