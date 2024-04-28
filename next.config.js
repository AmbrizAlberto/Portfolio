// next.config.mjs

const nextConfig = {
    images: {
      remotePatterns: [
        { hostname: 'cdn4.iconfinder.com' },
        { hostname: 'cdn-icons-png.flaticon.com' },
        { hostname: 'upload.wikimedia.org' },
        { hostname: 'static-00.iconduck.com' },
        { hostname: 'cdn.iconscout.com' },
        { hostname: 'camo.githubusercontent.com'},
        { hostname: 'dn-icons-png.flaticon.com'},
        { hostname: 'uxwing.com'},
        { hostname: 'icones.pro'},
      ],
    },
  };
  
  module.exports = nextConfig;
  