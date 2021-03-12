import API from '../core/api';
import { API_EPISODES_SLUG } from '../core/constants';

const GET_FILTERED_LIST = ids => API.get(`${API_EPISODES_SLUG}/[${ids}]`);

export { GET_FILTERED_LIST }