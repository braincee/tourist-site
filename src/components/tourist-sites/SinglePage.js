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
          <div>
            <form onSubmit={onSubmit} className='form'>
             <label>Buy Your Tickets Here!</label>
             <input type="email" id="email" placeholder='Enter your email'/>
             <button type='submit'>Submit</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default SinglePage