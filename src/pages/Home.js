import { useContext } from 'react';

import Product from '../components/Product';
// import product context
import { ProductContext } from '../contexts/ProductContext';
import Hero from '../components/Hero';

const Home = () => {
    //get product from product context

    const { products } = useContext(ProductContext);

    //get only men's & woment's clothing category
    const filterProducts = products.filter((item) => {
        return item.category === "men's clothing" || item.category === "women's clothing";
    });
    return (
        <div>
            <Hero />
            <section className="py-16">
                <div className="container mx-auto">
                    <h2 className="font-semibold text-lg mt-8 mb-16">Men's Clothing & Women's Clothing</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 mt-8">
                        {filterProducts.map((product) => (
                            <Product product={product} key={product.id}>
                                {product.title}
                            </Product>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
