import { describe, test, expect } from "@jest/globals";
import { esPalindromo } from "../../src/app/palabras";

describe("Pruebas para la función esPalindromo", () => {
    // Pruebas para cadenas que son palíndromos
    test("Detectar palíndromos", () => {
        expect(esPalindromo("anita lava la tina")).toBe(true); // Frase con espacios
        expect(esPalindromo("Amor a Roma")).toBe(true); // Palabras con mayúsculas y espacios
        expect(esPalindromo("La ruta natural")).toBe(true); // Frase con espacios
    });

    // Pruebas para cadenas que no son palíndromos
    test("Detectar no-palíndromos", () => {
        expect(esPalindromo("Hola Mundo")).toBe(false); // Frase que no es palíndromo
        expect(esPalindromo("palindromo")).toBe(false); // Palabra no palíndroma
        expect(esPalindromo("Test de Jest")).toBe(false); // Frase con palabras diferentes
    });

    // Pruebas para cadenas vacías y valores nulos
    test("Manejar cadenas vacías o nulas", () => {
        expect(esPalindromo("")).toBe(false); // Cadena vacía
        expect(esPalindromo(null as unknown as string)).toBe(false); // Valor nulo
        expect(esPalindromo(undefined as unknown as string)).toBe(false); // Valor indefinido
    });

});
