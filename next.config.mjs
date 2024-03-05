/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns:[{
        hostname:'cdn.dummyjson.com'
    },{
      hostname:"localhost"
    }]
  },
};

export default nextConfig;
