# GIF Viewer

## Instructions for running the app

### Clone

Clone this repo onto your local machine

### Install

Once you have the project cloned, go to the directory and run `npm install` to install node modules and dependent packages.

### Start

When everything is installed, run `npm start` to start the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Design Considerations and Tradeoffs

### Bootstrap

I decided to leverage bootstrap for styling purposes. It's quick and easy to use while keeping things readable. It's also helpful for implementing responsive design.

### Rendition Guide

Based on GIPHY's Rendition Guide, I followed a couple of suggestions in order to maximize quality and reduce loading times. I used MP4 and WEBP formats for all GIPHYs. In the preview grid, I used the smaller fixed_height renditions since a lot of GIPHYs would be loaded. On the detail view, I used the original rendition of the GIPHY which presents the highest quality since we could afford it.

### Query Params

In order to access the detail view directly from a URL, I used the params from the URL to get the GIF id, and then I hit the endpoint for GIFs by id. Since this is a small project, it could afford to hit the endpoint when access the detail view and maintain code simplicity. If this was a larger project and we were concerned about performance, I would consider storing the search results in the application state, and checking the for the GIF by id in those results before fetching another request.
I would also consider adding query params to the home page, and store the search query in a state variable that updated the URL with the search query as a parameter. Then this search page and its results could be directly access with its URL as well.

### Pagination

For the purposes of this project, I did not implement pagination. However, this is something I would definitely consider in the next stage in order to provide all the data to the user. Instead, I used a limit on the API request and set it to 25.

### API-key

I stored the API key as a constant in the index.js file which holds the functions used to fetch data from the API. This is NOT something I would normally ever do since I would typically want to keep the API key hidden. I would normally keep it in a .env file, but since this is a private repo and the API is pretty much public I left it as is.
