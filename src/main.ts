/*
Nombre del grupo / cantante / compositor (string).
Año de fundación: cuando se formó el grupo (numero).
Si está en activo (booleano).
Género musical (string).
Cada género queremos tenerlo en una variable.

The Beatles / 1960 / Activo: true / 🎵 Pop Rock
Queen / 1970 / Activo: false / 🎸 Rock
AC DC / 1973 / Activo: true / 🤘 Hard Rock
Ludwig van Beethoven / 1770 / Activo: false / 🎼 Clásica
The Rolling Stones / 1962 / Activo: true / 🎸 Rock
Queremos mostrar cada grupo por consola, el nombre del grupo de música queremos ponerlo en negrita, con fuente más grande y color de fondo verde.
*/

interface GruposM {
  NombreGrupo: string;
  AñoFundacion: number;
  Activo: boolean;
  GeneroM: string;
}

const estiloNom =
  "font-size: 24px; background-color: green; font-style: strong";

const grupoA: GruposM = {
  NombreGrupo: "The Beatles",
  AñoFundacion: 1960,
  Activo: true,
  GeneroM: "🎵 Pop Rock",
};
const grupoB: GruposM = {
  NombreGrupo: "Queen",
  AñoFundacion: 1970,
  Activo: false,
  GeneroM: "🎸 Rock",
};
const grupoC: GruposM = {
  NombreGrupo: "AC DC",
  AñoFundacion: 1973,
  Activo: true,
  GeneroM: "🤘 Hard Rock",
};
const grupoD: GruposM = {
  NombreGrupo: "Ludwig van Beethoven",
  AñoFundacion: 1770,
  Activo: false,
  GeneroM: "🎼 Clásica",
};
const grupoE: GruposM = {
  NombreGrupo: "The Rolling Stones",
  AñoFundacion: 1962,
  Activo: true,
  GeneroM: "🎸 Rock",
};
console.log(`%c${grupoA.NombreGrupo}`, estiloNom);
console.log(`Año de Fundación: ${grupoA.AñoFundacion}`);
console.log(`Activo: ${grupoA.Activo}`);
console.log(`Género Musical: ${grupoA.GeneroM}`);
console.log(`%c${grupoB.NombreGrupo}`, estiloNom);
console.log(`Año de Fundación: ${grupoB.AñoFundacion}`);
console.log(`Activo: ${grupoB.Activo}`);
console.log(`Género Musical: ${grupoB.GeneroM}`);
console.log(`%c${grupoC.NombreGrupo}`, estiloNom);
console.log(`Año de Fundación: ${grupoC.AñoFundacion}`);
console.log(`Activo: ${grupoC.Activo}`);
console.log(`Género Musical: ${grupoC.GeneroM}`);
console.log(`%c${grupoD.NombreGrupo}`, estiloNom);
console.log(`Año de Fundación: ${grupoD.AñoFundacion}`);
console.log(`Activo: ${grupoD.Activo}`);
console.log(`Género Musical: ${grupoD.GeneroM}`);
console.log(`%c${grupoE.NombreGrupo}`, estiloNom);
console.log(`Año de Fundación: ${grupoE.AñoFundacion}`);
console.log(`Activo: ${grupoE.Activo}`);
console.log(`Género Musical: ${grupoE.GeneroM}`);
