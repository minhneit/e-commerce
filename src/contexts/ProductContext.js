import { createContext, useState, useEffect } from 'react';
import request from '../utils/request';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fecthProducts = async () => {
            const res = await request.get('products');
            setProducts(res.data);
        };
        fecthProducts();
    }, []);
    return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
