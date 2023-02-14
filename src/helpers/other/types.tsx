export type Food = {
  id: number;
  category: string;
  img: any;
  alt?: string;
  title: string;
  detail?: string;
  price: number;
  index: number;
  qty: number;
  stock: number;
};
export type Dish = { img: JSX.Element; title: string };

type FoodArray = Food[];
export type NavProps = {
  logo: string;
  title: string;
  tabs: {
    name: string;
    href?: string;
    img?: any;
  }[];
  auth: { status: boolean; cred?: { img: string } };
};

export interface HeaderProps {
  left: {
    logo: {
      text: string;
    };
    title: {
      text: string;
      bold: string;
    };
    body: string;
    btn: string;
  };
  right: {
    food: FoodArray;
    bg: string;
  };
}

export type loginData = {
  email: string;
  password: string;
};
export type userData = {
  username: string;
  password: string;
  img: string;
  email: string;
  token?: string;
};

export interface LooseObject {
  [key: string]: any;
}

export type profile = {
  username: string;
  img: string;
  token: string;
};

export type editProfile = {
  username: string;
  img?: any;
};

export type totalInfo = {
  subTotal: number;
  fee: number;
  total: string;
};

export type gBody = {
  username: string;
  email: string;
  img: string;
};
export type editProductBody = {
  id: number | undefined;
  img: any;
  title: string | undefined;
  detail?: string | undefined;
  category: string | undefined;
  price: number | undefined;
  stock: number | undefined;
};

export type userAuth = {
  token: string;
  username: string;
  img: string;
  role: string;
};
