import API from '../core/api';
import { API_LOCATIONS_SLUG } from '../core/constants';

export const GET_LIST = () => API.get(`${API_LOCATIONS_SLUG}`);

export const GET_ONE = id => API.get(`${API_LOCATIONS_SLUG}/${id}`);
