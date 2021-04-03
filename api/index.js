import GhostContentAPI from '@tryghost/content-api';
console.log(process.env.API_URL);

const api = new GhostContentAPI({
  url: process.env.API_URL,
  key: process.env.CONTENT_API_KEY,
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