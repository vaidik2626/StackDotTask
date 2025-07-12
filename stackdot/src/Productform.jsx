
import React from "react";
import { legacy_createStore as createStore} from 'redux'
import store from "./store";

const Productform = () => {
    const [product, setProduct] = React.useState({
        id : 0,
        name: "",
        price: 0,
        Category: ""
    });

    const addProduct = () => {
        // Dispatch action to add product
        store.dispatch({
            type: "ADD_PRODUCT",
            payload: product
        });
        setProduct({ name: "", price: 0, Category: "" }); // Reset form
    }

    return (
        <div>

            <h2>Add Product</h2>
            <form>  
                <label>ID:</label>
                <input type="text" value={product.id} onChange={(e) => setProduct({...product, id: e.target.value })} />
                <br/>
                <br/>
                <label>Name:</label>
                <input type="text" value={product.name} onChange={(e) => setProduct({...product, name: e.target.value })} />
                <br/>
                <br/>
                <label>Price:</label>
                <input type="text" value={product.price} onChange={(e) => setProduct({...product, price: e.target.value })} />
                <br/>
                <br/>
                <label>Category:</label>
                <input type="text" value={product.Category} onChange={(e) => setProduct({...product, Category: e.target.value })} />
                <br/>
                <br/>
                <button onClick={addProduct}>Add Product</button>
            </form>


        </div>
        
        




)}

export default Productform;