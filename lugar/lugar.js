const axios = require("axios");

const getLugarLatLng = async direccion => {
  const encodedUrl = encodeURI(direccion);
  console.log(encodedUrl);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
    headers: {
      "x-rapidapi-key": "f2de8f107cmshb647701d0c17d0ep1727f6jsnaa26aede8cde"
    }
  });

  const respuesta = await instance.get();
  if (respuesta.data.Results === 0) {
    throw new Error`No hay resultados para ${direccion}`;
  }
  const data = respuesta.data.Results[0];
  const direccionData = data.name;
  const lat = data.lat;
  const lng = data.lon;

  return {
    direccionData,
    lat,
    lng
  };
};

module.exports = {
  getLugarLatLng
};
