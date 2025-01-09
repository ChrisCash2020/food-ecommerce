import { editProductBody, LooseObject } from '../other/types';
import * as Func from '../other/functions';
import { basicHeader } from '../other/config';
const API_URL =
  'https://crud-restaurant-chris-61d2dcfc3a9d.herokuapp.com/api/products';

// Edit existing product
const editProduct = async (productData: editProductBody) => {
  const url = API_URL + `/update/${productData.id}`;
  const method = 'PUT';
  const productBody = new FormData();
  if (typeof productData.img == 'string') {
    delete productData.img;
  }
  console.log(productData);
  for (const key in productData) {
    //@ts-ignore
    productBody.append(key, productData[key]);
  }
  let headers = Func.tokenFunc('admin');
  let res = await Func.req(url, productBody, method, headers);
  return await res.json();
};

// Create new product
const createProduct = async (productData: editProductBody) => {
  const url = API_URL + '/create';
  const method = 'POST';
  const productBody = new FormData();
  for (const key in productData) {
    //@ts-ignore
    productBody.append(key, productData[key]);
  }
  let headers = Func.tokenFunc('admin');
  let res = await Func.req(url, productBody, method, headers);
  return await res.json();
};

// Get user products
const getProducts = async () => {
  let headers: LooseObject = basicHeader;
  let res = await Func.req(API_URL, undefined, 'GET', headers);
  return await res.json();
};

// Delete user product
const deleteProducts = async (set: number[]) => {
  const url = API_URL + '/delete';
  const method = 'DELETE';
  const productBody = new FormData();
  // @ts-ignore
  productBody.append('productsArr', set);
  let headers = Func.tokenFunc('admin');
  let res = await Func.req(url, productBody, method, headers);
  return await res.json();
};

const productService = {
  editProduct,
  createProduct,
  getProducts,
  deleteProducts,
};

export default productService;
