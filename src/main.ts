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
  "font-size: 24px; background-color: green; font-stlye: strong";

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
console.log(grupoA);
console.log(grupoB);
console.log(grupoC);
console.log(grupoD);
console.log(grupoE);
console.log("%cThe Beatles", estiloNom);
console.log("%cQueen", estiloNom);
console.log("%cAC DC", estiloNom);
console.log("%cLudwig van Beethoven", estiloNom);
console.log("%cThe Rolling Stones", estiloNom);
