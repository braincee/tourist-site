import SinglePage from '@/src/components/tourist-sites/SinglePage';
import React from 'react'

const SInglePages = ({data}) => {
 return (
  <div>
    <SinglePage data={data}/>
  </div>
 )
}

export default SinglePages

export async function getStaticPaths() {
  const data = await import('/data/data.json');
 
  const allTourists = data.all_tourist_sites

  const allPaths = allTourists.map((p) => {
    return {
      params: {
        categories: p.region,
        id: p.id,
      }
    }
  })

  return {
    paths: allPaths,
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const id = context?.params.id
  const { all_tourist_sites } = await import('/data/data.json');

  const SingleTourist = all_tourist_sites.find((t) => id === t.id)
  return {
    props: { data: SingleTourist },
  }
}