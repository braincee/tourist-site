import React from 'react'
import TouristSite from '@/src/components/touristSites/TouristSite'

const Pages = ({data, pageName}) => {
  return (
    <div>
      <TouristSite data={data} pageName={pageName} />
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