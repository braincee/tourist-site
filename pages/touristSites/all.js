import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const AllTouristSites = ({ data }) => {
  return (
    <div className='main-body'>
      <h2>Major Tourist Sites in Ghana</h2>
      {data.map((t) => (
        <div key={t.id} className='card'>
        <div className='image'><Image width={500} height={300} alt={t.id} src={t.image}/></div>
        <div>
         <h2>{t.title}</h2>
         <p className='description'>{t.description}</p>
         <Link href={`/touristSites/${t.region}/${t.id}`}><button>{t.title}</button></Link>
        </div>
        </div>
      ))}
    </div>
  )
}

export default AllTouristSites

export async function getStaticProps() {
  const { all_tourist_sites} = await import('data/data.json')

  return {
     props: {
       data: all_tourist_sites,
     }
  }
}