"use client"
import { useRef } from "react";
import { Movie } from "@/typings";
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = { title?: string; movies: Movie[]; isVertical?: boolean };

function MoviesCarousel({ title, movies, isVertical }: Props) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300, // Adjust this value as needed
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300, // Adjust this value as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative z-50">
      <h2 className="text-xl font-bold px-10 py-2">{title}</h2>
      {!isVertical && (
        <>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-inherit bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full z-50"
            onClick={scrollLeft}
          >
            <ChevronLeft className="h-6 w-6 bg-inherit	" />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-inherit bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full z-50"
            onClick={scrollRight}
          >
            <ChevronRight className="h-6 w-6 bg-inherit	" />
          </button>
        </>
      )}

      <div
        ref={carouselRef}
        className={cn(
          "flex space-x-4 overflow-x-scroll scrollbar-hide px-5 lg:px-10 py-5",
          isVertical && "flex-col space-x-0 space-y-12 overflow-y-scroll"
        )}
      >
        {isVertical
          ? movies.map((movie) => (
              <div
                key={movie.id}
                className={cn(
                  isVertical &&
                    "flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5"
                )}
              >
                <MovieCard movie={movie} />
                <div className="max-w-2xl">
                  <p className="font-bold">
                    {movie.title} ({movie.release_date?.split("-")[0]})
                  </p>
                  <hr className="mb-3" />
                  <p className="">{movie.overview}</p>
                </div>
              </div>
            ))
          : movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}

export default MoviesCarousel;
