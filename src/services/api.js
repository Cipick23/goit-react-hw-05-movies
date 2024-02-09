export default async function articles(value, page = 1) {
  const baseURL = 'https://api.themoviedb.org/3';
  const API_KEY = 'da1c8b22101fae07022b46ba9b956907';

  return await fetch(
    `${baseURL}?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(Response => Response.json());
}
