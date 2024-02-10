import MovieCast from './cast/MovieCast';
import MovieReviews from './reviews/MovieReviews';

const MovieDetails = () => {
  return (
    <>
      <MovieCast />
      <MovieReviews />
      <span> hello! aici va fi detalile filmelor 'MovieDetails' </span>
    </>
  );
};

export default MovieDetails;
