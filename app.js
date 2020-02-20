const { getLugarLatLng } = require("./lugar/lugar");
const { getClima } = require("./clima/clima");

const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Descripcion de la ciudad para obtener el clima",
    demand: true
  }
}).argv;

//argv.direccion;

//getLugarLatLng(argv.direccion).then(resp => console.log(resp));

/* getClima(40.750000,-74.000000).then(console.log).catch(console.log); */

const getInfo = async direccion => {
  try {
    const coords = await getLugarLatLng(direccion);
    const temp = await getClima(coords.lat, coords.lng);
    return `El clima de ${direccion} es de ${temp}`;
  } catch (error) {
    return `No se pudo determinar el clima de ${direccion}`;
  }
};

getInfo(argv.direccion)
  .then(console.log)
  .catch(console.log);
