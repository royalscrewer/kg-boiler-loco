import Head from 'next/head'
import styles from '@styles/Home.module.scss'

export default function Home() {
  return (
    <div data-scroll-section className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-100 shadow-xl text-center">
        <h1 className="px-40 py-10 text-9xl">Starter</h1>
      </div>

    </div>
  )
}
