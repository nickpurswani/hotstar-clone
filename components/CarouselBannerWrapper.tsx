import { getDiscoverMovies } from '@/lib/getMovies'
import React from 'react'
import CarouselBanner from './CarouselBanner';
type props={
    id?:string,
    keywords?:string
}
async function CarouselBannerWrapper({id,keywords}:props) {
    const movies=await getDiscoverMovies(id,keywords);

  return (
    <CarouselBanner movies={movies}></CarouselBanner>
  )
}

export default CarouselBannerWrapper
