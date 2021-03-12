import API from '../core/api';
import { CHARACTERS_SLUG } from '../core/consts';

const GET_LIST = API.get(`${CHARACTERS_SLUG}`);

const GET_ONE = id => API.get(`${CHARACTERS_SLUG}/${id}`);

export {
  GET_LIST,
  GET_ONE,
}