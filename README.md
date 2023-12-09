# Food E-Commerce - ReactJs, Tailwind, TypeScript, Redux, Spring Boot, PostgreSQL, JWT, Google Auth, Firebase, Docker


## Description:

- Developed a food e-commerce website, implementing role-based access control for distinct admin and customer functionalities, resulting in streamlined operations and enhanced user experience.
- Customers can register/login, update credentials, filter the website's menu, add items to the cart, and checkout.
- All actions above are available to both roles; however, admin personnel have extra actions, such as adding, editing, and deleting menu items from a dashboard.
- MVC structured application with React/Redux as the front-end and incorporated a PostgreSQL/Docker container to create a Spring Boot Rest API in the back end.
- Secured the API to a specified origin and allowed unauthorized access to fetching products and retrieving credentials while requiring a JWT for all other crud operations.
- Added seamless integration of Google account registration/login functionality, streamlining onboarding process.

<br>
<br>
<a href="https://toulouse-exotica.netlify.app/" target="_blank" >Live Demo</a>
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
- Shopping cart where users can add food items to their shopping cart and complete purchase
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
<img src="https://github.com/ChrisCash2020/Images/blob/master/food/mobile-cart.png"  width="180" height="360" />
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



  
