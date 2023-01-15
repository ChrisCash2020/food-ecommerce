import heroBg from '../assets/hero-bg.jpg'
import navLogo from '../assets/navLogo.png'
import _404Logo from '../assets/404.svg'
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
} from '../assets/assests'
import {
  BsLinkedin,
  BsGithub,
  BsTwitter,
  BsBriefcaseFill,
} from 'react-icons/bs'
// import { ImRocket } from 'react-icons/im'
// import { CgDesktop } from 'react-icons/cg'
// import Item from '../components/Item'
import _404 from '../components/_404'
import bikeLogo from '../assets/bike.svg'
import { Food } from './types'
/*************
   Constant **************
   *************
  */
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
}
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
}

export const header = {
  left: {
    logo: {
      text: 'Delivery',
      img: bikeLogo,
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
}
export const fruits = {
  //@ts-ignore
  foods: [],
  title: 'Our Fresh & Healthy Fruits',
  slider: true,
}
export const menu = {
  tabs: [
    {
      img: menuIcon,
      name: 'Menu',
    },
    {
      img: burgerIcon,
      name: 'Burgers',
    },
    {
      img: fruitIcon,
      name: 'Fruits',
    },
    {
      img: drinksIcon,
      name: 'Soft Drinks',
    },
    {
      img: sidesIcon,
      name: 'Sides',
    },
    {
      img: iceCreamIcon,
      name: 'Ice Cream',
    },
    {
      img: fishIcon,
      name: 'Fish',
    },
    {
      img: riceIcon,
      name: 'Rice',
    },
    {
      img: steakIcon,
      name: 'Steaks',
    },
  ],
  title: 'Our Hot Dishes',
  slider: false,
}

export const main = {
  foods: [],
}
export const cart = {
  foods: [
    {
      img: '',
      alt: 'Strawberries',
      name: 'Strawberries',
      desc: 'Chocolate & Vanila',
      price: '15.99',
    },
    {
      img: '',
      alt: 'Strawberries',
      name: 'Strawberries',
      desc: 'Chocolate & Vanila',
      price: '15.99',
    },
    {
      img: '',
      alt: 'Strawberries',
      name: 'Strawberries',
      desc: 'Chocolate & Vanila',
      price: '15.99',
    },
    {
      img: '',
      alt: 'Strawberries',
      name: 'Strawberries',
      desc: 'Chocolate & Vanila',
      price: '15.99',
    },
    {
      img: '',
      alt: 'Strawberries',
      name: 'Strawberries',
      desc: 'Chocolate & Vanila',
      price: '15.99',
    },
    {
      img: '',
      alt: 'Strawberries',
      name: 'Strawberries',
      desc: 'Chocolate & Vanila',
      price: '15.99',
    },
    {
      img: '',
      alt: 'Strawberries',
      name: 'Strawberries',
      desc: 'Chocolate & Vanila',
      price: '15.99',
    },
    {
      img: '',
      alt: 'Strawberries',
      name: 'Strawberries',
      desc: 'Chocolate & Vanila',
      price: '15.99',
    },
    {
      img: '',
      alt: 'Strawberries',
      name: 'Strawberries',
      desc: 'Chocolate & Vanila',
      price: '15.99',
    },
  ],
  total: 10,
}
