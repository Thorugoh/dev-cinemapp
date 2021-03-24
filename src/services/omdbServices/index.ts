import { api } from '../../../Axios.config';

const DEFAULT_URL_AND_KEY = "http://www.omdbapi.com/?apikey=925eba28";

export function findMovieByName(name: string, page = 3) {
    return api.get(`${DEFAULT_URL_AND_KEY}&s=${name}&page=${page}`);
}
