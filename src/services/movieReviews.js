const movieReviews = id => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmZiNGNlMzE4ZWEyMzFmODJjN2Y3MTc5NmFhM2M2ZSIsInN1YiI6IjY1NzBkZjkyZGQ3MzFiMDBhYjk2Nzc0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F4GA0UkBmMTH3hTtFSbrMrSBqudmtfgqt4w1tmAKyIU',
    },
  };

  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
    options
  )
    .then(response => response.json())
    .catch(err => {
      console.error(`Error fetching movie details for ID: ${id}`, err);
      throw err;
    });
};

export default movieReviews;
