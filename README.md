# Creatella_test_Reactjs

This is an ecommerce site, where you can buy all sorts of ascii faces like (ノ・∀・)ノ and ¯_(ツ)_/¯, in a wide variety of font sizes. The homepage should display a list of products for people to browse.

# How to Run the application

This application is prepackaged with the server and the client code residing in different folders. Follow the process below to run the application

  *Get the clone from the repo https://github.com/ziedsayadi/Creatella_test_Reactjs
  *Run: $ npm install
  *Run: $ npm run start:server
  *Run: $ npm run start:react-app
The react app should open in port 3001 or any other port available since the server runs on 3000, but it would state this explicitly and whene it dose press the "y" .
The above commands start the server and react app.

# Features

*products are displayed in a grid.
*User have an option to sort the products in ascending order and also Can sort by "size", "price" or "id".
*Products list is rerendred after every new sorting option.
*Every product have an "id" feild, a "price" feild expressed with $ and a "size" feild expressed in pixels so to give the customers a realistic impression of what they're buying.
*every Product have also a "date" field, which is the date the product was added to the catalog and its displayed in relative time (eg. "3 days ago").
*Product Grid automatically load more items when scrolled.
*Animation applied on the title and the select button.
*Animated "circular spinner" when users scroll to load more.
*~ end of catalogue ~" message displayed when user gets to end of the list and an Animation applied on the message.
*Fetch a sponsored advertisement every 20 products without duplicates appearing in a row.
*Every card have some features like animated buttons and faces.
*Product list is respensive with simple UI.

# Technology used

*ReactJs to manage all componenets 
*Bootstrap for the easy design
*Css5 for some costomized features
*ContextApi for the easy and practical management of the state