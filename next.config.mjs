/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {protocol:"https",
            hostname:"knetic.org.uk"},
            {protocol:"https",
            hostname:"i.ibb.co"},
            {protocol:"http",
            hostname:"image.tmdb.org"}
    ]
    }

};

export default nextConfig;
