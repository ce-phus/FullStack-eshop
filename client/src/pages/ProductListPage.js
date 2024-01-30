import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsList } from '../actions/productActions';
import Message from '../components/Message';
import { Spinner, Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { CREATE_PRODUCT_RESET, CREATE_PRODUCT_SUCCESS } from '../constants';
import { useRouter } from 'next/router';

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
    <div className='text-light'>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && (
        <span style={{ display: 'flex' }}>
          <h5>Getting Products</h5>
          <span className='ml-2'>
            <Spinner animation='border' />
          </span>
        </span>
      )}
      <div>
        <Row>
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
                  <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                    <div className='mx-2'>
                      <Product product={product} />
                    </div>
                  </Col>
                ))}
        </Row>
      </div>
    </div>
  );
}

export default ProductsListPage;
