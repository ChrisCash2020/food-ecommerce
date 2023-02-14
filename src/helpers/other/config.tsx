// objects that act as config for for certain componets or pages
// states information such a title, text, icon, img, etc
import heroBg from '../../assets/hero-bg.jpg';
import navLogo from '../../assets/navLogo.png';
import {
  burgerIcon,
  steakIcon,
  sidesIcon,
  drinksIcon,
  fishIcon,
  fruitIcon,
  iceCreamIcon,
  menuIcon,
  riceIcon,
  cartIcon,
} from '../../assets/assests';
import {
  BsLinkedin,
  BsGithub,
  BsTwitter,
  BsBriefcaseFill,
} from 'react-icons/bs/index.js';

export const foot = {
  logo: navLogo,
  title: 'Toulouse Exotica',
  links: [
    {
      href: '#',
      icon: <BsBriefcaseFill />,
    },
    {
      href: '#',
      icon: <BsGithub />,
    },
    {
      href: '#',
      icon: <BsLinkedin />,
    },
    {
      href: '#',
      icon: <BsTwitter />,
    },
  ],
};
export const nav = {
  logo: navLogo,
  title: 'Toulouse Exotica',
  tabs: [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Menu',
      href: '/menu',
    },
    {
      name: 'About us',
      href: '/about',
    },
    {
      name: 'Contact us',
    },
    {
      name: 'Cart',
      img: cartIcon,
      href: '#',
    },
  ],
  auth: { status: true },
};

export const header = {
  left: {
    logo: {
      text: 'Delivery',
    },
    title: {
      text: 'The Fastest Food Delivery in',
      bold: 'Frisco',
    },
    body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, quibusdam, quae sit nemo vitae aliquid expedita nesciunt provident numquam rerum modi in consequatur excepturi. Eligendi.',
    btn: 'Order Now',
  },
  right: {
    food: [],
    bg: heroBg,
  },
};
export const fruits = {
  title: 'Our Fresh & Healthy Fruits',
  slider: true,
};
export const menu = {
  tabs: [
    {
      img: menuIcon,
      title: 'Menu',
    },
    {
      img: fruitIcon,
      title: 'Fruits',
    },
    {
      img: burgerIcon,
      title: 'Burgers',
    },
    {
      img: drinksIcon,
      title: 'Drinks',
    },
    {
      img: sidesIcon,
      title: 'Sides',
    },
    {
      img: iceCreamIcon,
      title: 'Ice Cream',
    },
    {
      img: fishIcon,
      title: 'Fish',
    },
    {
      img: riceIcon,
      title: 'Rice',
    },
    {
      img: steakIcon,
      title: 'Meats',
    },
  ],
  title: 'Our Hot Dishes',
  slider: false,
};

// a object for a basicHeader
export const basicHeader = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
