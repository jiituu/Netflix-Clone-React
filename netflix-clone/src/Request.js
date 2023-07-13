const API_KEY ="63b64bc8e66dcdeca21866806e2bd95a";

const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNeteflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    // fetchTopRated:`.movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    // fetchComedyMovies:`/dicover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMoviess:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    // fetchRomanceMovies:`/dicsover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,

}
export default requests
