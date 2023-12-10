import React,{ useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';

const Home = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className='mt-8'>
      <section className='py-16'>
        <div className='container mx-auto'>
          <h3 className='text-center text-2xl font-bold underline my-8'>Wellcome to demo shop</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {products.map(product => {
              return (
                <Product key={product.id} product={product} />
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
};

export default Home;
