Travel Tracker App
This simple app allows you to track the countries you have visited. It uses PostgreSQL as the database and Express.js for the server-side logic.

Setup

Install the dependencies using npm install.
Set up your PostgreSQL database and update the database configuration in index.js.
Run the server using node index.js 

Features
View the highlighted countries you have visited.
Add a new country to your visited list.

Usage
Access the app at http://localhost:3000.
Click on the "Add Country" button to add a new country.
Enter the country name and submit the form.
The app will add the country to your visited list and display the updated list.

Technologies Used:
Express.js
PostgreSQL
EJS (for templating)
Body-parser (for parsing request bodies)
Database Structure
The app uses a simple database structure with the following tables:
countries - Contains the list of countries with their country codes.
visited_countries - Tracks the countries that the user has visited, referencing the countries table.


Feel free to modify and extend the app as needed for your use case!