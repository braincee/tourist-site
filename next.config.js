/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'www.graphic.com.gh', 'visitghana.com', 'pivotconsultsgh.com', 
    'www.traveloghana.com', 'brandelmina.com', 'grassroottours.com', 'lh5.googleusercontent.com',
    'images.squarespace-cdn.com', 'www.easytrackghana.com', 'i0.wp.com', 'ghana.for91days.com',
    'media.timeout.com', 'touringghana.com', 'viewghana.com', 'upload.wikimedia.org', 'garlandmag.com',
    'www.nationalparks.africa', 'scontent.facc1-1.fna.fbcdn.net', 'braperucci.africa'
  ],
  },
};

module.exports = nextConfig
