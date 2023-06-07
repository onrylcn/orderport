import React from 'react'
import { icons } from 'react-icons'
import Title from '../ui/Title'
import MenuItem from './MenuItem'

const MenuWrapper = () => {
  return (
    <div className='container mx-auto mb-16 '>
        <div className='flex flex-col items-center w-full'>
        <Title addClass="text-[40px]">Menü</Title>
        <div className='mt-10'>
            <button className='px-6 py-2 bg-secondary text-white rounded-3xl '>All</button>
            <button className='px-6 py-2 rounded-3xl '>Burger</button>
            <button className='px-6 py-2 rounded-3xl '>Pizza</button>
            <button className='px-6 py-2 rounded-3xl '>Drink</button>
        </div>
        </div>
        <div className='mt-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </div>
    </div>
  )
}

export default MenuWrapper