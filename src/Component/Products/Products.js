import React, { useEffect, useState } from 'react';
import { addToData, getData } from '../../localStorage/localStorage';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const[searchProduct,setSearchProduct]=useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setSearchProduct(data)
            })
    }, []);
    useEffect(() => {
        if (products.length) {
            const savedProduct = getData();
            const savedProductArray = [];
            for (const key in savedProduct) {
                const product = products.find(pd => pd.key === key);
                const quantity = savedProduct[key];
                product.quantity = quantity;
                savedProductArray.push(product);
            }
            setCart(savedProductArray);
        }
    },[products]);
    const handelProducts = (products) => {
        products.quantity = 1;
        const newCart = [...cart, products];
        setCart(newCart);
        addToData(products.key);
    }
    const handelSearch = (e) => {
        const searchValue = e.target.value;
        const searchText = products.filter(product => product.name.toUpperCase().includes(searchValue.toUpperCase()));
        setSearchProduct(searchText);
    }
    return (
        <div>
            <div className="input-container">
                <input onChange={handelSearch} type="text" placeholder="Search fruits..." />
            </div>
            <div className="products-container">
                <div className="product-container">
                    {
                        searchProduct.map(product =><Product key={product.key} product={product} handelProducts={handelProducts}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Products;