import { describe, test, expect } from "@jest/globals"; 
import { esPrimo } from "../../src/app/numeros";

describe("Pruebas para la función esPrimo", () => {
    // Pruebas para números primos
    test("Detectar números primos", () => {
        expect(esPrimo(3)).toBe(true); // 3 es primo
        expect(esPrimo(13)).toBe(true); // 13 es primo
    });

    // Pruebas para números no primos
    test("Detectar números no primos", () => {
        expect(esPrimo(4)).toBe(false); // 4 no es primo
        expect(esPrimo(10)).toBe(false); // 10 no es primo
    });

    // Pruebas para números negativos y el cero
    test("Números negativos y cero no son primos", () => {
        expect(esPrimo(0)).toBe(false); // 0 no es primo
        expect(esPrimo(-1)).toBe(false); // -1 no es primo
    });

    // Pruebas para números grandes
    test("Detectar primos en números grandes", () => {
        expect(esPrimo(97)).toBe(true); // 97 es primo
        expect(esPrimo(101)).toBe(true); // 101 es primo
    });
});
