import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'

export default function Home {
  return (
    <>
      <Head>
        <title>test</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>

    
      </section>
    </>
  )
}