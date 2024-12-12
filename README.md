#Online Pet Store

#Project Overview
The Online Pet Store is a user-friendly e-commerce platform designed specifically for pet owners and enthusiasts. The platform offers a wide range of products, including pets, food, accessories, and cages. The goal of this project is to simplify the shopping experience for pet lovers by providing a seamless online store with attractive features like promotions and discounts.

#Key Features
* Product Categories: Browse through various categories such as pets, food, accessories, and cages.
* Shopping Cart: Add items to the cart and view your total before checkout.
* Promotions: Special discounts like the Christmas Sale (e.g., 20% off with code XMAS20).
* Secure Authentication: Login and signup functionalities for secure user access.
* Responsive Design: Ensures smooth access across devices, from desktops to smartphones.

#Tech Stack

#1. Frontend
HTML5, CSS3, JavaScript
Responsive design with custom styling in styles.css
#2. Backend
Java: DiscountCalculator.java for backend logic such as discount computation.
Node.js: Backend server setup with Express.js (optional integration).
#3. Database
MongoDB (Optional): For persistent storage of user data and product information.

#Setup Instructions

#Prerequisites
Node.js (v14 or later)
npm (Node Package Manager)
MongoDB (for backend)
A web browser (for frontend testing)

#Steps to Run
Clone the repository:

git clone https://github.com/ohitharani/Online-Pet-Store.git
cd Online-Pet-Store

#Install Dependencies:
npm install

#Database Setup:
* Start a MongoDB instance locally or connect to MongoDB Atlas.
* Create a .env file with the connection string:
MONGO_URI=mongodb://localhost:27017/petstore

#Run Backend Server:
npm start

#Frontend Testing:
* Open index.html in your browser.
* For dynamic frontend testing, use:
npm run dev

#Contributions
This project was developed as a solo initiative by Ohitha Rani Guddanti. Special thanks to David Pitts, Assistant Professor, Arts and Sciences (Computer Science), for guidance and support during the development.

#Future Enhancements
* Integrate payment gateway for seamless checkout.
* Add customer reviews and ratings for products.
* Implement advanced search and filtering options.
* Expand to include mobile app compatibility.

#License
This project is open-source under the MIT License.
