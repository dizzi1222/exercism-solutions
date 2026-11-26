/**
 * Esta plantilla se incluye para que empezar sea sencillo.
 */

export function twoFer(name: string = "you"): string {
  // ^                 ^   ^ esto se llama tipo de retorno; es el tipo del
  // ^                 ^     valor que devuelve esta función
  // ^                 ^
  // ^                 los parámetros van aquí
  // ^
  // permite que los tests importen esta función y la llamen
  // <-- Tu código va aquí. Puedes borrar todos los comentarios de este archivo.
  return `One for ${name}, one for me.`;
}
