/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ['next-international', 'international-types'],
  async headers() {
    return [
        {
            // matching all API routes
            source: "/:path*",
            headers: [
                { key: "Access-Control-Allow-Credentials", value: "true" },
                { key: "Access-Control-Allow-Origin", value: "true" }, // replace this your actual origin
                { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
        }
    ]
},
  images: {
  
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol : 'https',
        hostname : 'tailwindui.com'
      },
      {
        protocol : 'https',
        hostname : 'res.cloudinary.com'
      },
      
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
    ],
   
  },
};

module.exports = nextConfig;
