import React from 'react';

const Tourists = ({data}) => {
  return (
    <div>
       <div className='main-body tourist-pages'>
      <h2>Cities in Ghana</h2>
        {data.map((t) => (
            <Link key={t.id} href={`/tourist-sites/${t.id}`} passHref className='card'>
                <div><Image src={t.image} alt={t.image} width={500} height={350}/></div>
                <div><h2>{t.title}</h2><p className='description'>{t.description}</p>
                <ul className='list'>
                   <li>District: {t.district}</li>
                   <li>Population: {t.population}</li>
                </ul>
                </div>
            </Link>
         ))}
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