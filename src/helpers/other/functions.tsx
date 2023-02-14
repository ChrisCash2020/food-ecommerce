import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import { useAppSelector } from '../hooks/hooks';
import {
  newProductIndex,
  toggleConfirmDel,
  toggleDelBtns,
  toggleEditModal,
  toggleLoaderModal,
  toggleResetInputs,
} from '../slices/admin/adminSlice';
import { ClearProductInSet, toggleAddModal } from '../slices/admin/adminSlice';
import { RootState } from './store';
import { editProductBody, Food, gBody, LooseObject } from './types';
export const onChange = (
  e: {
    preventDefault(): unknown;
    target: { name: any; value: any; files?: any };
  },
  setState: React.Dispatch<React.SetStateAction<any>>
) => {
  e.preventDefault();
  const { name, value, files } = e.target;
  let val = files === null ? value : files[0];
  if (name == 'stock' || name == 'stock') val = Number(val);
  setState((prevState: any) => ({
    ...prevState,
    [name]: val,
  }));
};

// a simplified fetch request for the backend api
// has the nessesary conditionals to send proper request
export const req = async (
  url: string,
  body: any,
  method: string,
  headers?: any
) => {
  if (headers != undefined) {
    return body != undefined
      ? await fetch(url, {
          method: method,
          headers: headers,
          mode: 'cors',
          body: body,
          credentials: 'include',
        })
      : await fetch(url, {
          headers: headers,
          method: method,
          mode: 'cors',
          credentials: 'include',
        });
  } else {
    return await fetch(url, {
      method: method,
      mode: 'cors',
      body: body,
      credentials: 'include',
    });
  }
};

// function to handle token
export function tokenFunc(type: string, data?: any) {
  // 1. on register and login the function sets a localStorage of the token so it can be used on later visits
  // 2. on getting and or editing credentials the localStorage token item needs to be retreived to set the header accordingly
  // 3. on edit admin table localStorage item 'Admin' needs to be retreived to set the header accordingly

  if (type == 'set') {
    if (data.token) {
      localStorage.setItem('Authorization', JSON.stringify(data.token));
    } else {
      //@ts-ignore
      throw new Error(data);
    }
    return data;
  } else if (type == 'get') {
    let headers: LooseObject = {
      Accept: 'application/json',
    };
    const token = localStorage.getItem('Authorization');
    if (token != null) {
      const str = `Bearer ${JSON.parse(token)}`;
      str.replace(/['"]+/g, '');
      headers.Authorization = str;
    }
    return headers;
  } else if (type == 'admin') {
    let headers: LooseObject = {
      Accept: 'application/json',
    };
    const token = localStorage.getItem('Authorization');
    const admin = localStorage.getItem('Admin');
    if (token != null) {
      const str = `Bearer ${JSON.parse(token)}`;
      str.replace(/['"]+/g, '');
      headers.Authorization = str;
    }
    if (admin != null) {
      const str = `${JSON.parse(admin)}`;
      str.replace(/['"]+/g, '');
      headers.Admin = str;
    }
    return headers;
  } else {
    if (data.token) {
      return data;
    } else {
      //@ts-ignore
      throw Error(data);
    }
  }
}

// function for sliding to different directions
export function scrolltoEnd(bool: boolean) {
  const container = document.getElementById('slider');
  if (bool == true) {
    container?.scroll(1250, 0);
  } else {
    container?.scroll(0, 0);
  }
}

// handles the google register
export function handleGoogleRegister(
  google: any,
  dispatch: any,
  externalReg: any
) {
  function register(response: any) {
    const gBody: any = jwtDecode(response.credential);
    const body: gBody = {
      username: gBody.name,
      email: gBody.email,
      img: gBody.picture,
    };
    dispatch(externalReg(body));
  }
  google.accounts.id.initialize({
    client_id: import.meta.env.VITE_CLIENT_ID,
    callback: register,
  });
  google.accounts.id.renderButton(
    document.getElementById('registerBtn'),
    /** @type{!GsiButtonConfiguration} */
    {
      logo_alignment: 'left',
      width: 104,
      text: 'signup_with',
    }
  );
}
export function handleGoogleLogin(
  google: any,
  dispatch: any,
  externalLog: any
) {
  function login(response: any) {
    const gBody: any = jwtDecode(response.credential);
    dispatch(externalLog(gBody.email));
  }

  google.accounts.id.initialize({
    client_id: import.meta.env.VITE_CLIENT_ID,
    callback: login,
  });
  google.accounts.id.renderButton(
    document.getElementById('loginBtn'),
    /** @type{!GsiButtonConfiguration} */
    {
      logo_alignment: 'left',
      width: 104,
      text: 'signin_with',
    }
  );
}

export function testCredEdit(body: any) {
  // tests for invalid values
  // 1. tests if the body obj state wasn't altered
  // 2. tests if the username was changed but invalid length or was left undefined
  // 3. tests if the img provided was undefined
  if (body.username == undefined && body.img == 'something') {
    toast.info('No Changes Made');
    return false;
  } else if (body.username != undefined && body.username.length < 3) {
    toast.error('Invalid Username');
    return false;
  } else if (body.file == undefined && body.img != 'something') {
    toast.error('Invalid Image');
    return false;
  } else {
    return true;
  }
}
// initialstate for the adding & editing modals
export const initialState = {
  id: undefined,
  img: 'something',
  title: undefined,
  detail: undefined,
  price: undefined,
  stock: undefined,
  category: 'Fruits',
};
// function compares the submitted product to the initial state
function testProductNoChange(productBody: editProductBody) {
  let noChange: boolean = false;
  for (const key in initialState) {
    if (
      //@ts-ignore
      productBody[key] == initialState[key]
    ) {
      noChange = true;
    } else {
      noChange = false;
      break;
    }
  }
  return noChange;
}

export function testProductEdit(productBody: editProductBody, product: Food) {
  // tests for invalid values
  // 1. tests if the product body obj state wasn't altered
  // 2. alter the given products state where undefined or initial to the base state
  // 3. if a file exist it means a new image was added so will handle accordinly
  if (testProductNoChange(productBody)) {
    console.log('working');
    toast.info('No Changes Made', {
      position: 'top-center',
      autoClose: 1000,
    });
    return false;
  } else {
    console.log(productBody);
    for (const key in product) {
      if (key == 'img') {
        if (productBody.img == '') {
          toast.error('Invalid Image', {
            position: 'top-center',
            autoClose: 1000,
          });
          return false;
        } else if (productBody.hasOwnProperty('file')) {
          //@ts-ignore
          productBody.img = productBody.file;
        } else {
          productBody.img = product.img;
        }
      }
      if (
        //@ts-ignore
        productBody[key] == undefined ||
        //@ts-ignore
        productBody[key] == ''
      ) {
        //@ts-ignore
        productBody[key] = product[key];
      }
    }
    return true;
  }
}
export function testProductAdd(productBody: editProductBody) {
  // tests for invalid values
  // 1. tests if the product body obj state wasn't altered
  // 2. send a error message if any values are undefined or initial
  // 3. if a file exist it means a new image was added so will handle accordinly
  if (testProductNoChange(productBody)) {
    console.log('working');
    toast.info('No Changes Made', {
      position: 'top-center',
      autoClose: 1000,
    });
    return false;
  } else {
    console.log(productBody);
    for (const key in productBody) {
      if (key == 'img') {
        if (productBody.img == '') {
          toast.error('Invalid Image', {
            position: 'top-center',
            autoClose: 1000,
          });
          return false;
        } else if (productBody.hasOwnProperty('file')) {
          //@ts-ignore
          productBody.img = productBody.file;
        } else {
          delete productBody.img;
        }
      }
      if (key != 'id') {
        if (
          //@ts-ignore
          productBody[key] == undefined ||
          //@ts-ignore
          productBody[key] == ''
        ) {
          //@ts-ignore
          toast.error('Invalid Field(s)', {
            position: 'top-center',
            autoClose: 1000,
          });
          return false;
        } else {
          return true;
        }
      } else {
        delete productBody.id;
      }
    }
    return true;
  }
}

// test if a file is give, if size is accurate, and if the type is valid
export function testUpload(files: File[]) {
  const _2mb = 2097152;
  const types = ['image/png', 'image/jpeg', 'image/jpg'];
  const included = types.includes(files[0].type);
  if (files[0] && files[0].size <= _2mb && included) {
    return true;
  } else {
    return false;
  }
}

//  rename the file so the database doesn't send errors
export function renameFile(originalFile: File, newName: string) {
  const now = new Date().toTimeString() + newName;
  return new File([originalFile], now, {
    type: originalFile.type,
    lastModified: originalFile.lastModified,
  });
}
// sorting method for admin tavle
export function sortArrayOfProducts(array: Food[], sort: any) {
  return [...array].sort((a, b) => {
    // the a[sort.property] is equvilant to product.stock, and gets the value of specified object key
    // if the specified object key is a string a localCompare would be used to determine the sort
    // if the specified object key is a number a subraction is made to determine the sort

    return sort.toggle
      ? //@ts-ignore
        typeof a[sort.property] == 'string'
        ? //@ts-ignore
          a[sort.property].localeCompare(b[sort.property])
        : //@ts-ignore
          a[sort.property] - b[sort.property]
      : //@ts-ignore
      typeof a[sort.property] == 'string'
      ? //@ts-ignore
        b[sort.property].localeCompare(a[sort.property])
      : //@ts-ignore
        b[sort.property] - a[sort.property];
  });
}

// function to uncheck the html
export function unCheckProductSet() {
  document
    .querySelectorAll('.delCheckbox')
    //@ts-ignore
    .forEach((e: { checked: boolean }) => (e.checked = false));
}
// function for close modals
// these functions need to be made on close so state is cleared
export function closeProductModal(
  id: string,
  setProductBody?: any,
  dispatch?: any,
  duration?: number
) {
  // if setProductBody is given it will be resetted
  setProductBody ? setProductBody(initialState) : null;

  // transition effect to hide specified modal
  const itemModal = document.querySelector(id);
  console.log(itemModal);
  itemModal?.classList.add('opacity-0');
  itemModal?.classList.add('translate-y-full');

  // a setTimout to make the css more fluid
  setTimeout(() => {
    if (id == '#ItemModal') {
      dispatch(toggleEditModal(false));
    } else if (id == '#DelItemModal') {
      dispatch(toggleConfirmDel(false));
      dispatch(toggleDelBtns(false));
      unCheckProductSet();
      dispatch(ClearProductInSet());
    } else {
      dispatch(toggleAddModal(false));
    }

    // need to add the transition effect to element for later use
    itemModal?.classList.add('-translate-y-full');
    itemModal?.classList.remove('translate-y-full');

    // need to reset the state stored in the inputs
    dispatch(toggleResetInputs(true));
  }, duration || 200);
}

// this is specifically for the Product Editor Modal
export function openProductModal(index: any, id: string, dispatch: any) {
  const itemModal = document.querySelector(id);
  dispatch(toggleLoaderModal(false));
  dispatch(newProductIndex(index));
  dispatch(toggleEditModal(true));
  setTimeout(() => {
    itemModal?.classList.remove('opacity-0');
    itemModal?.classList.remove('-translate-y-full');
  }, 100);
}
