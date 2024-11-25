// Función principal para operar
function operar(operacion: string = "", a?: number, b?: number) {
    if (a === undefined) {
        throw new Error("El primer argumento 'a' es obligatorio y no puede ser undefined.");
    }
    if (operacion === 'suma') {
        return suma(a, b);
    } else if (operacion === 'resta') {
        return restar(a, b);
    } else if (operacion === 'multiplicacion') {
        return multiplicar(a, b);
    } else if (operacion === 'division') {
        return dividir(a, b);
    } else if (operacion === 'potencia') {
        if (b === undefined) {
            throw new Error("La operación de potencia requiere dos argumentos.");
        }
        return potencia(a, b);
    } else if (operacion === 'factorial') {
        return factorial(a);
    } else {
        throw new Error(`Operación no válida: ${operacion}`);
    }
}

// Suma de dos números
function suma(a: number, b?: number) {
    if (b === undefined) {
        throw new Error("La suma requiere dos argumentos.");
    }
    if (typeof a !== "number" || typeof b !== "number") {
        return NaN;
    }
    return a + b;
}

// Resta de dos números
function restar(a: number, b?: number) {
    if (b === undefined) {
        throw new Error("La resta requiere dos argumentos.");
    }
    return a - b;
}

// Multiplicación de dos números
function multiplicar(a: number, b?: number) {
    if (b === undefined) {
        throw new Error("La multiplicación requiere dos argumentos.");
    }
    return a * b;
}

// División de dos números
function dividir(a: number, b?: number) {
    if (b === undefined) {
        throw new Error("La división requiere dos argumentos.");
    }
    if (b === 0) {
        throw new Error("División por cero no permitida");
    }
    return a / b;
}

function potencia(a: number, b?: number) {
    if (b === undefined) {
        throw new Error("La operación de potencia requiere dos argumentos.");
    }
    return Math.pow(a, b);
}

// Factorial de un número
function factorial(a: number) {
    if (a < 0 || !Number.isInteger(a)) {
        throw new Error("El factorial solo se define para enteros positivos o cero");
    }

    let resultado = 1;
    for (let i = 1; i <= a; i++) {
        resultado *= i;
    }
    return resultado;
}

export { suma, restar, multiplicar, dividir, potencia, factorial, operar };
