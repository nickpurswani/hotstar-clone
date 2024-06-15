import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MovieCarousel from "@/components/MovieCarousel";
import { Button } from "@/components/ui/button";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/lib/getMovies";
import { Ghost } from "lucide-react";
import Image from "next/image";

export default async function Home() {
  const upcomingMovies= await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();


  return (
    <main className="">
      <CarouselBannerWrapper/>
      
        <MovieCarousel movies={upcomingMovies} title="upcoming"/>
        
        <MovieCarousel movies={topRatedMovies} title="topRated"/>
      
        <MovieCarousel movies={popularMovies} title="Popular" />
      
      
    </main>
  );
}
