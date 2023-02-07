import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Pages = ({ data, pageName }) => {
  return (
    <div className='main-body tourist-pages'>
    <h2>Tourist Sites in {pageName}</h2>
      <Link key={data.id} href={`/touristSites/${data.region}/${data.id}`} passHref className='card'>
        <div><Image width={500} height={300} alt={data.id} src={data.image}/></div>
        <div>
         <h2>{data.title}</h2>
         <p className='description'>{data.description}</p>
        </div>
      </Link>
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
  fallback: false,
 }
}

export async function getStaticProps(context) {
  const id = context?.params.categories;
  const { all_tourist_sites } = await import('/data/data.json');
  const data = all_tourist_sites.filter(t => t.region === id);
  return {props: {data, pageName: id} };
}