import React from 'react'
import Image from 'next/image'

const TouristPage = ({data}) => {
  
  return (
    <div>
        <Image src={data.image} width={1000} height={600} alt={data.title}/>
        <h1>{data.title}</h1>
        <p className='description'>{data.description}</p>
    </div>
  )
}

export default TouristPage

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
    fallback: false,
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