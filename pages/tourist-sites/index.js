import React from 'react';
import Image from 'next/image';

const Tourists = ({data}) => {
  return (
    <div>
        <h1>Tourist Site Pages</h1>
        <div>
         {data.map((t) => (
            <a key={t.id} href={`/tourist-sites/${t.id}`}>
               <Image src={t.image} alt={t.image} width={300} height={300}/>
               <h2>{t.title}</h2>
            </a>
         ))}
        </div>
    </div>
  )
}

export default Tourists;

export async function getStaticProps() {
   const { tourist_sites} = await import('data/data.json')

   return {
      props: {
        data: tourist_sites,
      }
   }
}