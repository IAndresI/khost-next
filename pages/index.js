import {useEffect, useState} from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {getPosts} from './api/ghost';

export default function Home() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    getPosts()
      .then(data => {
        setPost(data)
      })
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
      </header>

      <main className={styles.main}>
        <section>
          {
            post.map(post => (
              <div key={post.id}>
                <h1>{post.title}</h1>
                <h2>{post.authors[0].name}</h2>
                <p>{post.excerpt}</p>
              </div>
            ))
          }
        </section>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
