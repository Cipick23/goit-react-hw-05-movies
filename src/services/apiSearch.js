import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/search/movie',
  params: { include_adult: 'false', language: 'en-US', page: '1' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzFjMWQ0MjljYzEzYmFhOTQ5OTI1N2VlMzJiNDU0YSIsInN1YiI6IjY1YzM0NzFlOTVhY2YwMDE4MzFjYzFhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JLn5JCCJxeGxonVwpy_8IiREG1kTSzIQforDO2lzJwI',
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
