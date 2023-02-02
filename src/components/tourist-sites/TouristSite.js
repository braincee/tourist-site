import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const TouristSite = ({ data, pageName }) => {
  return (
    <div className='tourist-pages'>
    <h2>Tourist Sites in {pageName}</h2>
    {data.map((t) => (
      <Link key={t.id} href={`/tourist-sites/${t.region}/${t.id}`} passHref className='card'>
        <div className='image'><Image width={500} height={300} alt={t.id} src={t.image}/></div>
        <div>
         <h2>{t.title}</h2>
         <p className='description'>{t.description}</p>
        </div>
      </Link>
     ))}
  </div>
  )
}

export default TouristSite