import styles from '../styles/Home.module.css'
import Layout from '../components/layout';
import {getPosts} from '../api';
import Preview from '../components/preview';
import Technology from '../components/technology';
import Plan from '../components/plan';
import World from '../components/world';
import Choose from '../components/choose'

export default function Home({post}) {
  return (
    <Layout>
      <Preview />
      <Technology />
      <Plan />
      <World />
      <Choose />
      {/* {
        post.map(e => (<h1 key={e.id}>{e.title}</h1>))
      } */}
    </Layout>
  )
}

export const getStaticProps = async() => {
  let post = null;

  await getPosts()
    .then(data => {
      post = data
    })

  return {
    props: {
      post
    }, // will be passed to the page component as props
  }
}
