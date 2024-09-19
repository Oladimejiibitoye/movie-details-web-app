const { BASE_URL, API_KEY } = require("../../environment/config");
const axios = require("axios");

const fetchMovies = async (movieName) => {
  const url = BASE_URL;

  try {
    
    const { data } = await axios({
      method: "post",
      url,
      params: {
        t: movieName,
        apiKey: API_KEY
      }
    });
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

module.exports = {fetchMovies}