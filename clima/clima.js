const axios = require("axios");

const getClima = async (lat, lng) => {
  const resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=517ee502def7ec8c4676d0a9335b7bb1&units=metric`
  );
  return resp.data.main.temp;
};

module.exports = {
  getClima
};
