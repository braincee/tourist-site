import React from 'react'
import Image from 'next/image'

const TouristPages = ({ data }) => {
 return (
  <div className='single-page'>
       <div>
        <Image src={data.image} width={700} height={400} alt={data.title} />
        </div>
        <div>
        <h2>{data.title}</h2>
        <p className='description'>{data.description}</p>
        </div>
      </div>
 ) 
}

export default TouristPages

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