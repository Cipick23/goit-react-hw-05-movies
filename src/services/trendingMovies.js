import axios from 'axios';
import Error from 'components/common/Error/Error';

const trendingMovies = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/movie/week',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzFjMWQ0MjljYzEzYmFhOTQ5OTI1N2VlMzJiNDU0YSIsInN1YiI6IjY1YzM0NzFlOTVhY2YwMDE4MzFjYzFhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JLn5JCCJxeGxonVwpy_8IiREG1kTSzIQforDO2lzJwI',
  },
};

axios
  .request(trendingMovies)
  .then(function (response) {})
  .catch(function (error) {
    <Error message={error} />;
  });

const movieService = {
  trendingMovies,
};

export default movieService;
