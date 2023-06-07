import Campaigns from '@/components/Campaigns';
import Carousel from '@/components/Carousel';
import Header from '@/components/layout/Header';
import MenuWrapper from '@/components/product/MenuWrapper';
import React from 'react'

const Index = () => {
  return (
    <div>
    <Carousel />
    <Campaigns />
    <MenuWrapper />
    </div>
  )
}

export default Index;
