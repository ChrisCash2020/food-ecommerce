export type Food = {
  img: any
  alt?: string
  name: string
  desc?: string
  price?: string
}
export type Dish = { img: string; name: string }

export type FoodArray = Food[]
export interface CardProps {
  food: Food
  myRef?: null
}
export type NavProps = {
  logo: string
  title: string
  tabs: {
    name: string
    href?: string
    img?: any
  }[]
  auth: { status: boolean; cred?: { img: string } }
}

export interface ModalProps {
  tabs: {
    name: string
    href: string
  }[]
  show: boolean
  setShow: any
}
export interface HeaderProps {
  left: {
    logo: {
      text: string
      img: string
    }
    title: {
      text: string
      bold: string
    }
    body: string
    btn: string
  }
  right: {
    food: FoodArray
    bg: string
  }
}
export interface SliderProps {
  food: FoodArray
}
export type menuType = {
  tabs: Food[]
  title: string
  slider: boolean
}
export type mainType = {
  foods: JSX.Element[]
}
