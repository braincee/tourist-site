import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Tourists = ({ data }) => {
  return (
       <div className='main-body tourist-pages'>
      <h2>Cities in Ghana</h2>
        {data.map((t) => (
          <div key={t.id} className='card'>
            <div className='image'><Image src={t.image} alt={t.image} width={500} height={400}/></div>
                <div><h2>{t.title}</h2><p className='description'>{t.description}</p>
                <ul className='list'>
                   <li>District: {t.district}</li>
                   <li>Population: {t.population}</li>
                </ul>
                <Link href={`/touristSites/${t.id}`} passHref><button>{t.id}</button></Link>
            </div>
          </div>
         ))}
    </div>
  )
}

export default Tourists;

export async function getStaticProps() {
   const { tourist_regions} = await import('data/data.json')

   return {
      props: {
        data: tourist_regions,
      }
   }
}