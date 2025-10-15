# E-commerce
Just an e-commerce websiite to practice backend in NODE.JS

# Tech Stack Used:
    - Node.js
    - MongoDB
    - Express.js

# file structure:

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