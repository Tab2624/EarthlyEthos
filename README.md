[sign-in]: https://i.imgur.com/o3F2QDf.png
[home]: https://i.imgur.com/Dt3SsSF.png
[beezly]: https://i.imgur.com/DUHSFtH.png

# 🌍 Welcome to EarthlyEthos! 🌏

## Overview 🌐
Welcome to EarthlyEthos v.1 , an eco-conscious e-commerce platform committed to providing environmentally friendly products. This project is built with the MERN stack (MongoDB, Express, React, Node.js) and is designed to offer a seamless shopping experience for users passionate about sustainable living.

![alt text][home]

## Features 🛠️
- **Product Listings:** Browse a wide range of environmentally friendly products.
- **User Authentication:** Create accounts, log in, and securely manage your profile.
- **Shopping Cart:** Add and remove items, and proceed to a secure checkout process.
- **Order History:** Track your purchase history for a personalized shopping experience. *Coming in v.2!*
- **Admin Panel:** Manage products, orders, and user accounts with an intuitive admin interface. *Coming in v.2!*

## Technologies Used 🚀:

### Frontend:
- React.js
- Redux for state management
- Axios for HTTP requests
- React Router for navigation

### Backend:
- Node.js with Express.js
- MongoDB for data storage
- Mongoose as the ODM
- JWT for  authentication 

### Additional Technologies 🚀:
- faker-js
- bootstrap
- Google oAuth
- VoiceFlow
- and more!

### Google oAuth 🔍:

![alt text][sign-in]

### VoiceFlow (A.K.A Beezly!) 🐝:

![alt text][beezly]

## Installation
### Clone the repository:

```bash
git clone https://github.com/Tab2624/EarthlyEthos.git
cd EarthlyEthos
```

### Install dependencies:

For the server:

```bash
cd server
npm install
```

For the client:

```bash
Copy code
cd client
npm install
```

Set up the environment variables:

Create a .env file in the server directory and include the necessary variables (e.g., MongoDB connection string, JWT secret).
Seed the database (optional):

```bash
cd server
npm run seed
```

Run the application:

For the server:

```bash
cd server
node server.js
```

For the client:

```bash
cd client
npm start
```

## Open your browser and navigate to 'http://localhost:3000' to access EarthlyEthos.

# Contributing
Contributions to EarthlyEthos are welcome! If you'd like to contribute, please follow the community guidelines.

Thank you for using EarthlyEthos! Happy shopping and living sustainably! 🌍✨
