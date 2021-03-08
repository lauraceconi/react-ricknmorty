/*
** This helper is used to transform a character's
** espisodes list into an Array of its ID's
*/
function getIdFromUrl(url) {
  return url.split('/').pop();
}

export default function formatEpisodeList(urls) {
  const episodesListIds = [];
  urls.forEach(url => {
    episodesListIds.push(getIdFromUrl(url));
  });
  return episodesListIds.join(',');
}
