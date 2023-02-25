Principios de Testing y seguridad 
Actividad 1

En el desarrollo de esta actividad está dividida en 2 set de pruebas 
Para el primer caso se realizaron pruebas funcionales para distintos casos en un código de prueba, utilizando comprobación de funciones y callbacks 
Estas pruebas se realizaron en un entorno de node utilizando Tyescript y Jest

En la segunda parte se documentan los test realizado en React usando la librería 
Prueba de funcionalidades React Test Library y Vitest

Primeramente, definiremos un función que entregue un strings random de un arreglo de strings.
app .ts

App.test.ts
Comprobaremos la funcionalidad app.ts  de randomString , y además comprobaremos que no entregue un determinado dato, en este caso una ciudad que no existe en el array de origen 


Ejecutamos las pruebas para este primer set con Jest

Para este set de pruebas realizaremos test sobre las funciones definidas en functions.ts 

Las pruebas se organizan en bloques usando la función describe de Jest para cada función, y dentro de cada bloque, hay pruebas que comprueban si las funciones se comportan correctamente en diferentes situaciones.
Las funciones que se prueban son sum, reverseString, isUpperCase y isLowerCase.
En resumen, las pruebas verifican si:

    • Sum:  suma correctamente dos números y devuelve el resultado esperado, y devuelve NaN si se pasa un argumento que no es un número.
    • reverseString:  devuelve la cadena invertida correctamente, y lanza una excepción si se pasa un argumento que no es una cadena.
    • isUpperCase:  devuelve true si la cadena está en mayúsculas, y false si no lo está.
    • isLowerCase:  devuelve true si la cadena está en minúsculas, y false si no lo está.
Ejecutamos jest sobre el archivo function.test.ts

Finalmente en estas pruebas se comprueban diferentes aspectos de la funcionalidad de algunas funciones, como verificar si un valor es verdadero, falso o nulo, si un valor numérico es mayor que otro, si una cadena contiene ciertos caracteres, si una matriz contiene un elemento determinado, y si una función de devolución de llamada y una promesa funcionan correctamente. 
Además, hay algunos métodos de ciclo de vida que se ejecutan antes o después de todas las pruebas y que imprimen mensajes en la consola.

El resultado de las pruebas:

Pruebas en React
Para realizar las pruebas de testing en react utilizamos la librería de vitest junto con @testing-library/React
Para este caso crearemos un componente tipo accordion del cual probaremos su funcionalidad con una serie de test,
Es este caso Vitest nos ofrece un entorno de desarrollo para la ejecución de los test 

Componente accordion.tsx
Este es un componente de React llamado Accordion que recibe dos propiedades:

    • title: el título que se muestra en la interfaz de usuario.
    • children: el contenido que se oculta o se muestra cuando se hace clic en el botón de "Abrir".
El componente utiliza el hook useState de React para mantener el estado de open, que indica si el contenido debe mostrarse o no.
La función Accordion devuelve un elemento div que contiene el título y un botón de "Abrir" que muestra u oculta el contenido cuando se hace clic. El botón utiliza una expresión ternaria para cambiar el texto que se muestra según si el contenido está abierto o cerrado. El contenido se muestra si la variable open es verdadera, de lo contrario no se muestra.
En resumen, este es un componente simple que se utiliza para crear un acordeón en la interfaz de usuario, permitiendo al usuario mostrar u ocultar el contenido.

Accordion.test.tsx
Este archivo de prueba se utiliza para probar la funcionalidad del componente Accordion en React, asegurándose de que el título y el contenido se muestren y oculten correctamente en respuesta a los clics del usuario.
La función describe establece un grupo de pruebas que se enfocan en el componente Accordion. Dentro de describe, la función beforeEach se llama para establecer el componente Accordion con un título y algunos elementos de contenido de ejemplo utilizando la función render de @testing-library/react. Esto se hace antes de cada prueba en este grupo.

Las pruebas en este archivo de prueba son:

    • La prueba "should show the title all time" verifica si el título se muestra todo el tiempo en el componente Accordion.
    • La prueba "should not show the content by default" verifica si el contenido está oculto por defecto en el componente Accordion.
    • La prueba "should show the content when the button is clicked" verifica si el contenido se muestra cuando se hace clic en el botón en el componente Accordion.
    • La prueba "should hide the content when the button is clicked twice" verifica si el contenido se oculta cuando se hace clic dos veces en el botón en el componente Accordion.
En cada prueba, se usa la biblioteca @testing-library/react para buscar elementos en la interfaz de usuario y simular eventos del usuario utilizando la función fireEvent. Las afirmaciones se realizan utilizando las funciones de comparación proporcionadas por Jest y @testing-library/react, como expect, toBe, toBeDefined, toBeTruthy, toBeNull, queryByText y getByText.


Vitest, nos permite un entorno de pruebas automatizado que incluso nos proporciona una interface web para interactuar con el código de testing.

Render de Vitest en navegador 