/*function areaDelCirculo(radio: number) {
  return 2 * Math.PI * radio * radio;
 }
const area = areaDelCirculo(4);
console.log(area); 

const areaCuadrado = (lado: number) => {
  return lado * lado;
}
const areaC = areaCuadrado(8);
console.log(areaC);

const estiloTitulo = "color:blue; font-size:18px";
const alubias = "🫘 alubias";
const aguacate = "🥑 aguacate";
const huevo = "🥚 huevo";
const cebolla = "🧅 cebolla";
const tomate = "🍅 tomate";
const lechuga = "🥬 lechuga";
function pintaReceta(titulo: string, ingredientes: string, preparacion: string) {
 const estiloTitulo = "color:blue; font-size:18px";
 // Título ensalada
 console.log(`%c${titulo}`, estiloTitulo);
 // Ingredientes
 console.log(`Ingredientes: ${ingredientes}`);
 // Preparación
 console.log(`Preparación: ${preparacion}`);
}
pintaReceta(
 "Ensalada de alubias con aguacate y huevo",
 `- Ingredientes: ${alubias}, ${aguacate}, ${huevo}, ${cebolla}, ${tomate}, ${lechuga}.`,
 "Preparación: cocer las alubias y dejar enfriar. Mezclar con aguacate en cubos, huevo cocido en rodajas, cebolla en juliana, tomate en cubos y lechuga troceada. Aliñar con aceite de oliva y vinagre."
);
*/
/*
function sumar() {
  // Leer los valores de los inputs
  const sumando1 = (document.getElementById("sumando1") as HTMLInputElement)
    .value;
  const sumando2 = (document.getElementById("sumando2") as HTMLInputElement)
    .value;
  // Sumar los dos números
  const resultado = parseInt(sumando1) + parseInt(sumando2);
  // Mostrar el resultado
  const resultadoElement = document.getElementById("resultado");
  if (resultadoElement !== null && resultadoElement !== undefined) {
    resultadoElement.innerHTML = resultado.toString();
  }
}

const botonsumar = document.getElementById("sumar");
if (botonsumar !== null && botonsumar !== undefined) {
  botonsumar.addEventListener("click", sumar);
}
*/
/*
function cambiarFotoPrincipal(idMiniatura: string): void {
  const fotoPrincipal = (document.getElementById("foto-principal") as HTMLImageElement);
  const miniatura = (document.getElementById(idMiniatura) as HTMLImageElement);
  if (
    fotoPrincipal !== null &&
    fotoPrincipal !== undefined &&
    miniatura !== null &&
    miniatura !== undefined
  ) {
    fotoPrincipal.src = miniatura.src;
  }
}
const miniatura1 = document.getElementById("miniatura1") as HTMLInputElement;
const miniatura2 = document.getElementById("miniatura2") as HTMLInputElement;
const miniatura3 = document.getElementById("miniatura3") as HTMLInputElement;
/*
 tambien puede hacerse:
 if (miniatura1 !==null && miniatura1 !==undefined){
  miniatura1.addEventListener("click", () => cambiarFotoPrincipal("miniatura1"));
 }
 */
/*
miniatura1.addEventListener("click", () => cambiarFotoPrincipal("miniatura1"));
miniatura2.addEventListener("click", () => cambiarFotoPrincipal("miniatura2"));
miniatura3.addEventListener("click", () => cambiarFotoPrincipal("miniatura3"));
*/

