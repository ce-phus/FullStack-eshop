import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsList } from '../actions/productActions';
import Message from '../components/Message';
import Spinner from '../components/Spinner';
import Product from '../components/Product';
import { CREATE_PRODUCT_RESET, CREATE_PRODUCT_SUCCESS } from '../constants';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Head from 'next/head';


function ProductsListPage() {
  const router = useRouter();
  const searchTerm = router.query.search;
  const dispatch = useDispatch();

  // products list reducer
  const productsListReducer = useSelector((state) => state.productsListReducer);
  const { loading, error, products } = productsListReducer;

  useEffect(() => {
    dispatch(getProductsList());
    dispatch({
      type: CREATE_PRODUCT_RESET,
    });
    // dispatch(checkTokenValidation());
  }, [dispatch]);

  const showNothingMessage = () => {
    return (
      <div>
        {!loading ? <Message variant='info'>Nothing to show</Message> : ''}
      </div>
    );
  };

  return (

    <>
      <Head>
    <title>products-list</title>
        <meta name="description" content="product-list" />
    </Head>
    <div className='text-light'>
      <Layout className='pt-20 md:p-16 sm:pt-8'>
      {error && <Message variant='danger'>{error}</Message>}
        {loading && (
          <span style={{ display: 'flex' }}>
            <h5>Getting Products</h5>
            <span className='ml-2'>
              <Spinner  />
            </span>
          </span>
        )}

        <div className=''>
         <Gallery/>
        </div>
        <div className='grid grid-rows-3 grid-cols-3 gap-4 md:grid-cols-1 md:col-span-4'>
          
            {/* If length of the filter result is equal to 0 then show 'nothing found' message
                with help of showNothingMessage function else show the filtered result on the
                webpage and then run the map function */}
            {products
              .filter((item) =>
                item.name.toLowerCase().includes(searchTerm && searchTerm !== '' ? searchTerm.split('=')[1] : '')
              )
              .length === 0 
            ? showNothingMessage()
            : products
                .filter((item) =>
                  item.name.toLowerCase().includes(searchTerm && searchTerm !== '' ? searchTerm.split('=')[1] : '')
                )
                .map((product, idx) => (
                  <div key={product.id}>
                     <div className='mx-2'>
                      <Product product={product} />
                    </div>
                  </div>
                  
                ))}
        
      </div>
      </Layout>
      <Footer/>
      
    </div>
    
    </>

    
  );
}

export default ProductsListPage;
