import API from '../core/api';
import { CHARACTERS_SLUG, EPISODES_SLUG } from '../core/consts';

const GET_CHARACTERS = API.get(`${CHARACTERS_SLUG}`);

const GET_ONE_CHARACTER = id => API.get(`${CHARACTERS_SLUG}/${id}`);

const GET_EPISODES = ids => API.get(`${EPISODES_SLUG}/[${ids}]`);

export {
  GET_CHARACTERS,
  GET_ONE_CHARACTER,
  GET_EPISODES
}