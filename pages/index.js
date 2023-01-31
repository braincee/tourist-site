import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'



export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Tourists Website</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header> 
        <nav>
          <img />
          <Link href='/' passHref>Home</Link>
          <Link href='/tourist-sites' passHref>Tourist Sites Page</Link>
          <Link href='/about-us' passHref>About Us</Link>
        </nav>
      </header>

      <main className={styles.main}>
        {data.map((t) => (
          <Link key={t.id} href={`/tourist-sites/${t.id}`} passHref>
            <Image width={200} height={200} alt={t.id} src={t.image}/>
            <h2>{t.title}</h2><p>{t.description}</p>
          </Link>

        ))}
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const { tourist_sites } = await import('/data/data.json');
  return {
    props: {
      data: tourist_sites,
    }
  }
}
