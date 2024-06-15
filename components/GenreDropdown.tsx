import {
    ChevronDown,
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from 'react'
import Link from "next/link";
type Genre={
        id:number,
        name:string
};
type Genres={
    genres:Genre[]
}
type RequestInit={
    method:string,
    headers:{
        Accept:string,
        Authorization:string
    },
    next:{
        revalidate:number
    }
}
async function GenreDropdown() {
    const url:string="https://api.themoviedb.org/3/genre/movie/list?language=on";
    const options:RequestInit={
        method :"GET",
        headers: {
            'Authorization': `Bearer ${process.env.TMDB_API_KEY}`,
            'Accept': 'application/json'
          },
        next:{
            revalidate:60*60*24
        }
    }
    const response=await fetch(url,options);
    const data= (await response.json()) as Genres
    
    return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Genre <ChevronDown className="ml-1"></ChevronDown></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {data.genres.map((genre: Genre) => (
          <Link key={genre.id} href={`/genre/${genre.id}?genre=${genre.name}`} passHref>
            <DropdownMenuItem asChild>
              <a>{genre.name}</a>
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default GenreDropdown
