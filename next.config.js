/** @type {import('next').NextConfig} */


const withVideos = require('next-videos');
const nextConfig = {
    reactStrictMode: true,
}

module.exports = withVideos(nextConfig, {
    webpack(config) {
      config.module.rules.push({
        test: /\.(mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'public/',
            },
          },
        ],
      });
  
      return config;
    },
  });
