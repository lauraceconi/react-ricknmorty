import API from '../core/api';
import { API_CHARACTERS_SLUG } from '../core/constants';

export const GET_LIST = () => API.get(`${API_CHARACTERS_SLUG}`);

export const GET_ONE = id => API.get(`${API_CHARACTERS_SLUG}/${id}`);

export const FILTER_BY_IDS = ids => API.get(`${API_CHARACTERS_SLUG}/[${ids}]`);

export const FILTER_BY_TEXT = text => API.get(`${API_CHARACTERS_SLUG}/?name=${text}`);
