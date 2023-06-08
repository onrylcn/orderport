import Image from 'next/image'
import React from 'react'
import Title from './ui/Title'

const About = () => {
  return (
    <div className='bg-secondary'>
        <div className='container mx-auto py-20 '>
            <div className='grid  sm:grid-cols md:grid-cols-2 '>
            <div className='relative w-[445px] h-[600px] '>
                <Image src="/images/about-img.png" alt='' layout='fill'/>
            </div>
            <div className='grid place-content-center gap-y-6 text-white'>
                <Title addClass="text-[2.5rem]">We Are Orderport</Title>
                <p>There are many variations of passages of Lorem Ipsum available, 
                    but the majority have suffered alteration in some form, by injected humour. There are many variations of passages of Lorem Ipsum available, 
                    but the majority have suffered alteration in some form, by injected humour.</p>
                <button className='btn-primary'>Devamını Oku</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About