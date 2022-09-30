/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'i.scdn.co', // Spotify Album Art
      'pbs.twimg.com', // Twitter Profile Picture
      'cdn.sanity.io'
    ]
  },
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true,
    images: {
      unoptimized: true
    }
  },
};
