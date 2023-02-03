import React from 'react';
import TouristPages from '@/src/components/tourist-sites/TouristPages';

const Tourists = ({data}) => {
  return (
    <div>
      <TouristPages data={data}/>
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