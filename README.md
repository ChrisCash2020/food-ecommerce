# Food E-Commerce - ReactJs, Tailwind, TypeScript, Redux, Spring Boot, PostgreSQL, JWT, Google Auth, Firebase, Docker,


## Description:

This project was made as a way to practice developing full-stack applications with Java Spring Boot.
This project allows logged in customers to browse and order food items and pay online using a secure payment gateway. 
The developed the secure backend Rest API with a Docker container with psql where all crud operations require a specified origin.
The crud operations of fetching products and retreiving credentials is permitted to all while other operations require a JWT authentication token.
Actions are sepearted to specific roles such as admin and user, admin as access extra operations such as editting product details, adding new products, and deleting products.
All actions are available to both roles such as the action to login/register (internal & external) and updating user credentials.
<br>
<br>
<a href="https://movieconnect.netlify.app/" target="_blank" >Live Demo</a>
> Preview
<p>
<img src="https://github.com/ChrisCash2020/Images/blob/master/food/demo.gif" width="500" height="280" />
</p>

## Installation

<pre>
cd food-ecommerce
npm install 
npm run dev
</pre>

## Technologies Used:

- ReactJS
- Tailwind
- TypeScript
- Redux
- Spring Boot
- PostgreSQL
- JWT
- Goggle Auth
- Firebase
- Doker

## Top Features:
- Bcrypt password encryption/verification
- Firebase file upload of profile images
- JWT authentication and authorization
- One Click Google Login/Register
- Menu Filtering by category
- Shopping cart wher users can add food items to their shopping cart and complete purchase
- Admin dashboard so owners can log in and manage their menu items
- Dashboad sorting function for product properties 
- Toastify info/update/sucess/error handling 
- Mobile first web design

## Design:

### Client-side:

This is the front-end repository

<br/>

> Desktop View
<p float="left">
<img src="https://github.com/ChrisCash2020/Images/blob/master/food/home.png" width="500" height="280" />
<img src="https://github.com/ChrisCash2020/Images/blob/master/food/menu.png" width="500" height="280" />
<img src="https://github.com/ChrisCash2020/Images/blob/master/food/about.png" width="500" height="280" />
<img src="https://github.com/ChrisCash2020/Images/blob/master/food/contact.png" width="500" height="280" />
<img src="https://github.com/ChrisCash2020/Images/blob/master/food/cart.png" width="500" height="280" />
<img src="https://github.com/ChrisCash2020/Images/blob/master/food/profile.png" width="500" height="280" />
<img src="https://github.com/ChrisCash2020/Images/blob/master/food/A_auth.png" width="500" height="280" />
<img src="https://github.com/ChrisCash2020/Images/blob/master/food/table.png" width="500" height="280" />
<img src="https://github.com/ChrisCash2020/Images/blob/master/food/edit.png" width="500" height="280" />
<img src="https://github.com/ChrisCash2020/Images/blob/master/food/add.png" width="500" height="280" />
<img src="https://github.com/ChrisCash2020/Images/blob/master/food/del.png" width="500" height="280" />
<img src="https://github.com/ChrisCash2020/Images/blob/master/food/confirm.png" width="500" height="280" />
</p>
<br/>

> Mobile View
<p float="left">
<img src="https://github.com/ChrisCash2020/Images/blob/master/food/mobile-home.png"  width="180" height="360" />
<img src="https://github.com/ChrisCash2020/Images/blob/master/food/mobile-menu.png"  width="180" height="360" />
<img src="https://github.com/ChrisCash2020/Images/blob/master/food/mobile-about.png"  width="180" height="360" />
<img src="https://github.com/ChrisCash2020/Images/blob/master/food/mobile-contact.png"  width="180" height="360" />
<img src="https://github.com/ChrisCash2020/Images/blob/master/food/mobile-fcart.png"  width="180" height="360" />
<img src="https://github.com/ChrisCash2020/Images/blob/master/food/mobile-checkout.png"  width="180" height="360" />
<img src="https://github.com/ChrisCash2020/Images/blob/master/food/mobile-login.png"  width="180" height="360" />
<img src="https://github.com/ChrisCash2020/Images/blob/master/food/mobile-register.png"  width="180" height="360" />
<img src="https://github.com/ChrisCash2020/Images/blob/master/food/mobile-profile.png"  width="180" height="360" />
<img src="https://github.com/ChrisCash2020/Images/blob/master/food/mobile-A_auth.png"  width="180" height="360" />
<img src="https://github.com/ChrisCash2020/Images/blob/master/food/mobile-table.png"  width="180" height="360" />
<img src="https://github.com/ChrisCash2020/Images/blob/master/food/mobile-edit.png"  width="180" height="360" />
<img src="https://github.com/ChrisCash2020/Images/blob/master/food/mobile-add.png"  width="180" height="360" />
<img src="https://github.com/ChrisCash2020/Images/blob/master/food/mobile-del.png"  width="180" height="360" />
<img src="https://github.com/ChrisCash2020/Images/blob/master/food/mobile-confirm.png"  width="180" height="360" />
<br/>

### Server-Side:
The back-end repository: <a href="https://github.com/ChrisCash2020/restapi/" target="_blank" >Food-Ecom ResAPI</a>

Rest API: 
- Spring Boot:
  - Spring Security
  - Module-View-Controller project structure
  - JPA model ORM
  - Store user and product images in Firebase
  - User Authenication done through secure HTTP only JWT

### Database:

Tables:
- Users: stores username, password, email, img, role, provider
- Products: stores img, alt, title, detail, category, price, stock



  
