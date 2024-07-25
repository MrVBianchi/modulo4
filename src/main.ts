const generaNumAl = (): number => Math.floor(Math.random() * 101);
const NumparaAcertar: number = generaNumAl();
console.log(NumparaAcertar);

type Estado =
  | "NO_ES_UN_NUMERO"
  | "EL_NUMERO_ES_MAYOR"
  | "EL_NUMERO_ES_MENOR"
  | "ES_EL_NUMERO_SECRETO"
  | "GAME_OVER_MAXIMO_INTENTOS";

const MAXIMO_INTENTOS = 5;
let numeroDeIntentos = 0;
const HasSuperadoElNumeroMaximoDeIntentos = (): boolean =>
  numeroDeIntentos > MAXIMO_INTENTOS;

const muestraNumeroDeIntentos = () => {
  const elementoIntentos = document.getElementById("intentos");
  if (elementoIntentos) {
    elementoIntentos.innerHTML = `${numeroDeIntentos} de ${MAXIMO_INTENTOS}`;
  } else {
    console.error(
      "muestraNumeroDeIntento: No se ha encontrado el elemento con id intentos"
    );
  }
};
document.addEventListener("DOMContentLoaded", muestraNumeroDeIntentos);

const gestionarGameOver = (estado: Estado) => {
  if (estado === "GAME_OVER_MAXIMO_INTENTOS") {
    const elementoComprobar = document.getElementById("comprobar");
    if (elementoComprobar && elementoComprobar instanceof HTMLButtonElement) {
      elementoComprobar.disabled = true;
    } else {
      console.error(
        "gestionarGameOver: No se ha encontrado el elemento con id comprobar"
      );
    }
  }
};
const muestraMensajeComprobacion = (texto: string, estado: Estado) => {
  let mensaje: string = "";
  switch (estado) {
    case "NO_ES_UN_NUMERO":
      mensaje = `"${texto}" no es un número 🤨, prueba otra vez`;
      break;
    case "EL_NUMERO_ES_MAYOR":
      mensaje = `UUYYY ! El número ${texto} es MAYOR que el número secreto`;
      break;
    case "EL_NUMERO_ES_MENOR":
      mensaje = `UUYYY ! El número ${texto} es MENOR que el número secreto`;
      break;
    case "GAME_OVER_MAXIMO_INTENTOS":
      mensaje = `🪦 GAME OVER, has superado el número máximo de intentos`;
      break;
    case "ES_EL_NUMERO_SECRETO":
      mensaje = `¡¡¡Enhorabuena, has acertado el número!!! 🎉🎉🎉`;
      break;
    default:
      mensaje = "No se que ha pasado, pero no deberías estar aquí";
      break;
  }
  const elementoResultado = document.getElementById("resultado");
  if (elementoResultado) {
    elementoResultado.innerHTML = mensaje;
  } else {
    console.error(
      "muestraMensajeComprobacion: No se ha encontrado el elemento con id resultado"
    );
  }
};

const comprobarNumero = (texto: string) => {
  const numero = parseInt(texto);
  const esUnNumero = !isNaN(numero);

  if (!esUnNumero) {
    return "NO_ES_UN_NUMERO";
  }
  if (numero === NumparaAcertar) {
    return "ES_EL_NUMERO_SECRETO";
  }

  if (HasSuperadoElNumeroMaximoDeIntentos()) {
    return "GAME_OVER_MAXIMO_INTENTOS";
  }
  return numero > NumparaAcertar ? "EL_NUMERO_ES_MAYOR" : "EL_NUMERO_ES_MENOR";
};
const handleCompruebaClick = () => {
  let texto: string = "";
  const inputElement = document.getElementById("numero");
  if (inputElement && inputElement instanceof HTMLInputElement) {
    texto = inputElement.value;
  }
  const estado: Estado = comprobarNumero(texto);
  muestraMensajeComprobacion(texto, estado);
  numeroDeIntentos++;
  muestraNumeroDeIntentos();
  gestionarGameOver(estado);
};
const botonComprobar = document.getElementById("comprobar");
if (botonComprobar && botonComprobar instanceof HTMLButtonElement) {
  botonComprobar.addEventListener("click", handleCompruebaClick);
}
