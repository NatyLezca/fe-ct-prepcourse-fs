/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;
}
devolverString ("Hola Loki")

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   var resultadoSuma = x + y;
   return resultadoSuma;
}
suma(1,1)
function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   var resultadoResta = x - y;
   return resultadoResta;
}
resta(1,3)
function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   var divide = x/y;
   return divide;
}
divide(20,5)

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   var multiplica = x*y;
   return multiplica;
}
multiplica(5,4)
function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   var obtenerResto = x % y;
   return obtenerResto;
}
obtenerResto(26,5)
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
