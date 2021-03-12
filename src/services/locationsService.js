import API from '../core/api';
import { API_LOCATIONS_SLUG } from '../core/constants';

const GET_LIST = () => API.get(`${API_LOCATIONS_SLUG}`);

const GET_ONE = id => API.get(`${API_LOCATIONS_SLUG}/${id}`);

export {
  GET_LIST,
  GET_ONE,
}