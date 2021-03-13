import API from '../core/api';
import { API_CHARACTERS_SLUG } from '../core/constants';

export const GET_LIST = () => API.get(`${API_CHARACTERS_SLUG}`);

export const GET_ONE = id => API.get(`${API_CHARACTERS_SLUG}/${id}`);

export const GET_FILTERED_LIST = ids => API.get(`${API_CHARACTERS_SLUG}/[${ids}]`);
