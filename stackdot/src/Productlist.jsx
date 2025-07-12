import React from "react";

import { legacy_createStore as createStore } from 'redux';
import store from "./store";

const ProductList = () => {

    const product = store.getState().products;

    const Editproduct = (id) => {
        store.dispatch({
            type: "UPDATE_PRODUCT",
            payload: { id }
        });
    };
    const Deleteproduct = (id) => {
        store.dispatch({
            type: "REMOVE_PRODUCT",
            payload: { id }
        });

  return (
    <div>
      <h1>Product List</h1>
      {/* Product items will be rendered here */}
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
               product.forEach( (element) => {
                <tr>
                    <td>{element.id}</td>
                    <td>{element.name}</td>
                    <td>{element.price}</td>
                    <td>{element.Category}</td>
                    <td>
                        <button onclick= {Editproduct}>Edit</button>
                        <button onclick= {Deleteproduct}>Delete</button>
                    </td>
                </tr>
               });
        </tbody>
      </table>
    </div>
  );
};
}

export default ProductList;
