import React from 'react';
import Image from 'next/image';
import { getMoviesDetails } from '@/lib/getMovies';
type BelongsToCollection= {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

type Genre ={
  id: number;
  name: string;
}

type ProductionCompany ={
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

type ProductionCountry ={
  iso_3166_1: string;
  name: string;
}

type SpokenLanguage= {
  english_name: string;
  iso_639_1: string;
  name: string;
}

 type Movie= {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

type Props = {
  params: {
    id: string;
  };
};

async function Movies({ params: { id } }: Props) {
  const data: Movie = await getMoviesDetails(id);

  return (
    <div className="max-w-7xl mx-auto p-5">
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold">{data.title}</h1>
        
        <div className="relative w-full h-full">
          <Image
            src={`http://image.tmdb.org/t/p/w500${data.backdrop_path}`}
            alt={data.title}
            width={1920}
              height={1080}
            className="rounded-lg shadow-lg"
          /><div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1A1C29]" />
   
          <div className="absolute inset-0 bg-gradient-to-t from-black  rounded-lg" />
          <h2 className="absolute bottom-5 left-5 text-white text-3xl font-bold">{data.tagline}</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:space-x-10">
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-semibold mb-2">Overview</h2>
            <p className="text-lg text-white-700">{data.overview}</p>

            <div className="mt-5">
              <h3 className="text-xl font-semibold">Genres</h3>
              <div className="flex flex-wrap">
                {data.genres.map((genre) => (
                  <span key={genre.id} className="mr-2 mt-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-xl font-semibold">Production Companies</h3>
              <div className="flex flex-wrap">
                {data.production_companies.map((company) => (
                  <div key={company.id} className="mr-5 mt-2 flex items-center">
                    {company.logo_path && (
                      <Image
                        src={`http://image.tmdb.org/t/p/w200${company.logo_path}`}
                        alt={company.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    )}
                    <span className="ml-2">{company.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="mt-5 lg:mt-0">
              <h3 className="text-xl font-semibold">Movie Details</h3>
              <ul className="list-none space-y-2">
                <li><strong>Release Date:</strong> {data.release_date}</li>
                <li><strong>Runtime:</strong> {data.runtime} minutes</li>
                <li><strong>Budget:</strong> ${data.budget.toLocaleString()}</li>
                <li><strong>Revenue:</strong> ${data.revenue.toLocaleString()}</li>
                <li><strong>Popularity:</strong> {data.popularity}</li>
                <li><strong>Vote Average:</strong> {data.vote_average}</li>
                <li><strong>Vote Count:</strong> {data.vote_count}</li>
                <li>
                  <strong>Homepage:</strong> <a href={data.homepage} target="_blank" rel="noopener noreferrer" className="text-blue-500">Visit</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
