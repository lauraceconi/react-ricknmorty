import API from '../core/api';
import { EPISODES_SLUG } from '../core/consts';

const GET_FILTERED_LIST = ids => API.get(`${EPISODES_SLUG}/[${ids}]`);

export { GET_FILTERED_LIST }