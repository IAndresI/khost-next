import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: "https://khost.ghost.io",
  key: "9ef8d3c0e4619813d379e1f4a5",
  version: "v3"
});

export async function getPosts() {
  return await api.posts.browse({
    limit: "all",
    include: 'tags,authors'
  })
  .catch(err => {
    console.log(err);
  })
}