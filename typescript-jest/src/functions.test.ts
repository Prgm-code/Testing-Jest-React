// Ejemplo de archivo de pruebas en Jest para funciones en TypeScript

import { sum, reverseString, isUpperCase, isLowerCase } from './functions';

describe('Funciones', () => {
  describe('sum', () => {
    it('debería sumar dos números y devolver el resultado', () => {
      expect(sum(1, 2)).toBe(3);
      expect(sum(-1, 1)).toBe(0);
    });

    it('debería devolver NaN si alguno de los argumentos no es un número', () => {
      expect(sum(1, '2' as any)).toBeNaN();
      expect(sum('foo' as any, 'bar' as any)).toBeNaN();
    });
  });

  describe('reverseString', () => {
    it('debería devolver la cadena al revés', () => {
      expect(reverseString('hello')).toBe('olleh');
      expect(reverseString('foo bar')).toBe('rab oof');
    });

    it('debería lanzar una excepción si se le pasa un argumento que no sea una cadena', () => {
      expect(() => reverseString( 123 as any)).toThrow();
      expect(() => reverseString(['foo', 'bar'] as any)).toThrow();
    });
  });

  describe('isUpperCase', () => {
    it('debería devolver true si la cadena está en mayúsculas', () => {
      expect(isUpperCase('HELLO')).toBe(true);
      expect(isUpperCase('WORLD')).toBe(true);
    });

    it('debería devolver false si la cadena no está en mayúsculas', () => {
      expect(isUpperCase('Hello')).toBe(false);
      expect(isUpperCase('world')).toBe(false);
    });
  });

  describe('isLowerCase', () => {
    it('debería devolver true si la cadena está en minúsculas', () => {
      expect(isLowerCase('hello')).toBe(true);
      expect(isLowerCase('world')).toBe(true);
    });

    it('debería devolver false si la cadena no está en minúsculas', () => {
      expect(isLowerCase('Hello')).toBe(false);
      expect(isLowerCase('World')).toBe(false);
    });
  });

});
