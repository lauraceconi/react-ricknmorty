import API from '../core/api';
import { API_CHARACTERS_SLUG } from '../core/constants';

const GET_LIST = () => API.get(`${API_CHARACTERS_SLUG}`);

const GET_ONE = id => API.get(`${API_CHARACTERS_SLUG}/${id}`);

export {
  GET_LIST,
  GET_ONE,
}