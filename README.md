# WordPress-React

This is a clean, basic blog built as a proof-of-concept to see whether it’s feasible to use WordPress as a Headless CMS using React & Next.js to display the front-end from WP’s RESTful API, or stick to the PHP status-quo.

The site is developed with React/Next.js & Express, to provide server-side rendering so that search engines can crawl the sites correctly, allowing the blog to rank correctly. Keeping this in mind is crucial with React/Javascript frameworks as the client-side/server can often look very different to users/crawling bots. Most React apps don’t tend to render anything until the page is loaded – otherwise simply leaving an empty container, so thinking about SSR for a blog (where ranking is crucial for improvement) was a priority. 

Everything you see is data inputted into a default WordPress installation and displayed out using the standard /wp-json/ routes. When the WordPress backend is updated, both sites will automatically update. Because of the way the React site is built, the blog can easily be updated to populate using data from another WordPress CMS simply by changing the wp-json domain.

## Running

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits; errors can be found in the console.<br>

## Deployment

```sh
# build for production
npm run build

# start the production server
npm run start
```

The site needs a node server to allow search engines to crawl your content on the first load.
