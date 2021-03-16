import API from '../core/api';
import { API_EPISODES_SLUG } from '../core/constants';

export const FILTER_BY_IDS = ids => API.get(`${API_EPISODES_SLUG}/[${ids}]`);
