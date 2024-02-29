/** In this file, we will export all the utility functions that we will use in our application.
 * These are functions that are not directly related to the application's business logic,
 * but are used to help us to keep our code clean and organized.
 * For example, functions to format dates, to format currency, to extract data from an object, etc. */

import { Product } from './interfaces/products';
import { User } from './interfaces/user';

export function setErrorInput(input: Element) {
  input.classList.add('error');
  input.classList.remove('success');
  input.nextElementSibling?.classList.remove('hide');
}

export function resetInput(input: Element) {
  input.classList.remove('error');
  input.classList.remove('success');
  input.nextElementSibling?.classList.add('hide');
}

export function resetForm(inputs: Element[]) {
  inputs.forEach((input) => {
    resetInput(input);
  });
}

export async function getUsers(): Promise<User[]> {
  try {
    const response = await fetch('src/assets/data/users.json');
    const JSONResponse = await response.json();
    return JSONResponse;
  } catch (error) {
    throw new Error(`Something is wrong in f APIFetch: ${error}`);
  }
}

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch('src/assets/data/products.json');
    const JSONResponse = await response.json();
    return JSONResponse;
  } catch (error) {
    throw new Error(`Something is wrong in f APIFetch: ${error}`);
  }
}
