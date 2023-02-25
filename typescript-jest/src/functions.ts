// Ejemplo de archivo de funciones en TypeScript

export function sum(a: number, b: number): number {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return a + b;
  }
  
  export function reverseString(str: string): string {
    if (typeof str !== 'string') {
      throw new Error('El argumento debe ser una cadena');
    }
    return str.split('').reverse().join('');
  }
  
  export function isUpperCase(str: string): boolean {
    return str === str.toUpperCase();
  }
  
  export function isLowerCase(str: string): boolean {
    return str === str.toLowerCase();
  }

  
  