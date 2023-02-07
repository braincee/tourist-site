import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Tourists = ({ data }) => {
  return (
    <div>
       <div className='main-body tourist-pages'>
      <h2>Cities in Ghana</h2>
            <Link key={data.id} href={`/touristSites/${data.id}`} passHref className='card'>
                <div><Image src={data.image} alt={data.image} width={500} height={350}/></div>
                <div><h2>{data.title}</h2><p className='description'>{data.description}</p>
                <ul className='list'>
                   <li>District: {data.district}</li>
                   <li>Population: {data.population}</li>
                </ul>
                </div>
            </Link>
    </div>
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