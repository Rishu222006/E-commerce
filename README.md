# E-commerce
A simple E-commerce website backend built using Node.js, Express.js, and MongoDB. This project focuses on core backend concepts including authentication, hashing, salting, cart management, and product handling.

# Tech Stack Used:
    - Node.js
    - MongoDB
    - Mongoose
    - Express.js

# Project Overview:
This project implements essential e-commerce backend functionalities such as:
    - Secure authentication using hashing & salting
    - User login & session handling
    - Product creation & listing
    - Add-to-Cart and cart management logic
    - Owner/Admin login panel

# To View:
    - To run this app/website, either clone the repository or open github codespaces.
    - Then run the following commands:
        1. cd back 
        2. npm i 
        3. npx nodemon app.js 

# Features included:
    🔐 Authentication System with hashing & salting + JWT based authentication.
    🛒 User Cart Management (add/remove items)
    📦 Product Listing & Details
    ➕ Add to Cart Functionality
    👤 Owner/Admin Controls

# file structure:
```
📦back
 ┣ 📂config
 ┃ ┗ 📜mongoose-connection.js
 ┣ 📂controllers
 ┃ ┗ 📜authController.js
 ┣ 📂middlewares
 ┃ ┗ 📜isLoggedIn.js
 ┣ 📂models
 ┃ ┣ 📜owner_model.js
 ┃ ┣ 📜product_model.js
 ┃ ┗ 📜user_model.js
 ┣ 📂public
 ┃ ┣ 📂images
 ┃ ┣ 📂javascript
 ┃ ┗ 📂stylesheets
 ┣ 📂routes
 ┃ ┣ 📜index.js
 ┃ ┣ 📜ownerRouter.js
 ┃ ┣ 📜productsRouter.js
 ┃ ┗ 📜userRouter.js
 ┣ 📂utils
 ┃ ┗ 📜generateToken.js
 ┣ 📂views
 ┃ ┣ 📂partials
 ┃ ┃ ┣ 📜footer.ejs
 ┃ ┃ ┗ 📜header.ejs
 ┃ ┣ 📜.gitkeep
 ┃ ┣ 📜admin.ejs
 ┃ ┣ 📜cart.ejs
 ┃ ┣ 📜createproducts.ejs
 ┃ ┣ 📜index.ejs
 ┃ ┣ 📜owner-login.ejs
 ┃ ┗ 📜shop.ejs
 ┣ 📜.env
 ┣ 📜app.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜test.js
```

# Future Improvements:
    - API versioning
    - Order placement & checkout system
    - Payment gateway integration
    - Admin dashboard enhancements

# License:
    This project is for learning and education purposes.