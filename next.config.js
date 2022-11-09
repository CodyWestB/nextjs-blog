// const withOptimizedImages = require('next-optimized-images');

// module.exports = withOptimizedImages({
//   /* config for next-optimized-images */

//   // your config for other plugins or the general next.js here...
// });

// module.exports = {
//     images: {
//       loader: 'custom',
//       loaderFile: './my/image/loader.js',
//     },
// }

module.exports = {
    // output: 'standalone',
    images: {
        unoptimized: true
    }
}
