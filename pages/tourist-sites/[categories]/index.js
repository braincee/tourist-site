import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Pages = ({data, pageName}) => {
  return (
    <div>
        <h1>{pageName}</h1>
        <div>
        {data.map((t) => (
          <Link key={t.id} href={`/tourist-sites/${t.region}/${t.id}`} passHref>
            <Image width={300} height={300} alt={t.id} src={t.image}/>
            <h2>{t.title}</h2>
            <p>{t.description}</p>
          </Link>
         ))}
        </div>
    </div>
  )
}

export default Pages

export async function getStaticPaths() {
  const { tourist_sites } = await import('/data/data.json')
  const allPaths = tourist_sites.map((t) => {
    return {
      params: {
         categories: t.id.toString(),
      }
    }
  })

 return {
  paths: allPaths,
  fallback: true,
 }
}

export async function getStaticProps(context) {
  const id = context?.params.categories;
  const { all_tourist_sites } = await import('/data/data.json');
  const data = all_tourist_sites.filter(t => t.region === id);
  return {props: {data, pageName: id} };
}