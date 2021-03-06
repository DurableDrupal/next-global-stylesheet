> Based on next.js [with-global-stylesheet](https://github.com/zeit/next.js/tree/v3-beta/examples/with-global-stylesheet) as of 20170520 (see original README below)
### Changing Global stylesheet
* Added `components` folder and inside layout.js file
    * Importing general scss file in `layout.js` adding `import stylesheet from 'styles/index.scss'` 
    * Adding <style dangerouslySetInnerHTML={{ __html: stylesheet }} /> inside the `<div>` in order to apply the styles contained inside `index.scss` file
* Creating pages into `pages` folder
    * Created about.js and contact.js
* Importing `components/layout.js` to reuse main menu `nav` in all pages that are on `pages` folder: (Adding the following line inside of `index.js, about.js, and contact.js`)
    * import Layout from '../components/layout' 

### Overwriting Global stylesheet
* Create `contact.scss` inside `styles` folder
    * Change colors or anything to overwriting the global stylesheet.
* Go to the page that we can overwrite the styles. Go and open `pages/contact.js` and import the custom `.scss file` inside:
    * `import stylesheet from 'styles/contact.scss'`
    * Add: `<style dangerouslySetInnerHTML={{ __html: stylesheet }} />` inside `<Layout>` in order to apply the styles contained in `contact.scss` file
* Done

### Original README
[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/zeit/next.js/tree/master/examples/with-global-stylesheet)
# Global Stylesheet example

This is an example of how you can include a global stylesheet in a next.js webapp.


## How to use

Download the example [or clone the repo](https://github.com/zeit/next.js):

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/master | tar -xz --strip=2 next.js-master/examples/with-global-stylesheet
cd with-global-stylesheet
```

To get this example running you just need to

    npm install .
    npm run dev

Visit [http://localhost:3000](http://localhost:3000) and try to modify `styles/index.scss` changing color. Your changes should be picked up instantly.

Also see it working with plain css here
![example](example.gif)

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```


## The idea behind the example

The strategy here is to transpile the stylesheet file to a css-in-js file so that it can be loaded and hot reloaded both on the server and the client. For this purpose I created a babel loader plugin called [babel-loader-wrap-in-js](https://github.com/davibe/babel-plugin-wrap-in-js).

Another babel plugin [module-resolver](https://github.com/tleunen/babel-plugin-module-resolver) enables us to import stylesheets from js (e.g. pages or components) through a `styles` directory alias rather than relative paths.

The `sass-loader` is configured with `includePaths: ['styles', 'node_modules']` so that your scss can `@import` from those places, again without relative paths, for maximum convenience and ability to use npm-published libraries.  Furthermore, `glob` paths are also supported, so one could for example add `'node_modules/@material/*'` to the `includePaths`, which would make [material-components-web](https://github.com/material-components/material-components-web) (if you'd like) even easier to work with.

Furthermore, PostCSS is used to [pre-process](https://medium.com/@ddprrt/deconfusing-pre-and-post-processing-d68e3bd078a3) both `css` and `scss` stylesheets, the latter after Sass pre-processing.  This is to illustrate `@import 'normalize.css';` from `node_modules` thanks to `postcss-easy-import`.  [Autoprefixer](https://github.com/postcss/autoprefixer) is also added as a "best practice".  Consider [cssnext](http://cssnext.io) instead, which includes `autoprefixer` as well as many other CSS spec features.

This project shows how you can set it up. Have a look at:
- .babelrc
- next.config.js
- pages/index.js
- postcss.config.js
- styles/index.scss

Please, report any issue on enhancement related to this example to its original
github repository https://github.com/davibe/next.js-css-global-style-test
