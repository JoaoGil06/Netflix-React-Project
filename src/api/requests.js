const API_KEY = "5d3e15ff6815ea45bca1da781b446736";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=pt-PT`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=pt-PT`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=pt-PT`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=pt-PT`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=pt-PT`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=pt-PT`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=pt-PT`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=pt-PT`,
};

export default requests;
