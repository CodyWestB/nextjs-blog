# NextJS + NestJS Tutorial


## Create Project:
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"


## Run development server (port: 3000)
`npm run dev`


### Using classnames library to toggle classes
`npm install classnames`

-- OR --

`yarn add classnames`



## NextJS uses PostCSS for transforming CSS with Javascript
- https://postcss.org/
- NextJS compiles CSS using PostCSS
- Related -> https://tailwindcss.com/

`npm install -D tailwindcss autoprefixer postcss`

- Then, create a postcss.config.js
    - Documentation for PostCSS -> https://nextjs.org/docs/advanced-features/customizing-postcss-config
    - Example for TailwindCSS -> https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss



## Next.js allows you to import Sass using both the .scss and .sass extensions
- can use component-level Sass via CSS Modules and the .module.scss or .module.sass extension
- Install sass

`npm install -D sass`


## NextJS Pre-rendering
- By default, Next.js pre-renders every page
- Static Generation (Recommended)
    - The HTML is generated at build time and will be reused on each request.
- Server-side Rendering
    - The HTML is generated on each request
- Client-side data fetching along with Static Generation or Server-side Rendering
    - https://nextjs.org/docs/basic-features/data-fetching/client-side
### Static Generation with data
Some pages require fetching external data for pre-rendering. There are two scenarios, and one or both might apply. In each case, you can use these functions that Next.js provides:
1. Your page content depends on external data: Use getStaticProps.
2. Your page paths depend on external data: Use getStaticPaths (usually in addition to getStaticProps).
### Server-side Rendering
- If a page uses Server-side Rendering, the page HTML is generated on each request.
    - getServerSideProps is run on every request instead of on build time.


## YAML Front Matter
- can be parsed using a library called gray-matter which lets us parse the metadata in each markdown file
npm install gray-matter
* fs is a Node.js module that let's you read files from the file system.
* path is a Node.js module that let's you manipulate file paths.
* matter is a library that let's you parse the metadata in each markdown file.
* In Next.js, the lib folder does not have an assigned name like the pages folder, so you can name it anything. It's usually convention to use lib or utils.

## SWR
- React Hooks for Data Fetching
- https://swr.vercel.app/
- The team behind Next.js has created a React hook for data fetching called SWR. We highly recommend it if you’re fetching data on the client side. It handles caching, revalidation, focus tracking, refetching on interval, and more. We won’t cover the details here, but here’s an example usage:

## render markdown content - use the remark library
`npm install remark remark-html`

## Formatting the Date - use the date-fns library
`npm install date-fns`


