import React from 'react'
import Image from 'next/image'


const SinglePage = ({ data }) => {
    const onSubmit = () => {

    };

  return (
    <div className='single-page'>
        <div>
          <Image src={data.image} width={700} height={400} alt={data.title}/>
        </div>
        <div>
          <h2>{data.title}</h2>
          <p className='description'>{data.description}</p>
        </div>
        </div>
  )
}

export default SinglePage