// next.config.mjs

const nextConfig = {
    images: {
      remotePatterns: [
        { hostname: 'cdn4.iconfinder.com' },
        { hostname: 'cdn-icons-png.flaticon.com' },
        { hostname: 'upload.wikimedia.org' },
        { hostname: 'static-00.iconduck.com' },
        { hostname: 'cdn.iconscout.com' }
      ],
    },
  };
  
  module.exports = nextConfig;
  