import React, { useState } from 'react';
import Link from "next/link";
import CartButton from './CartButton';
import BuyButton from './BuyButton';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';

const Product = ({ product, addToCart }) => { // Destructure addToCart from props

    const [quantity, setQuantity] = useState(1); // State to manage quantity
    const [overrideQuantity, setOverrideQuantity] = useState(false); // State to manage override quantity

    const baseUrl = 'http://localhost:8000'; // Base URL of your backend server
    // Update the image URL with the base URL
    const fullImageUrl = baseUrl + product.image;

    return (
        <div className='grid xl:grid-cols-3 lg:grid-cols-3 gap-4 mt-10 max-w-sm bg-gray-800 border-gray-700 rounded-lg p-3'>
            <div className='text-light md:col-span-4 lg:col-span-4 rounded-t-lg'>
                <Link href={`/product/${product.id}`}>
                    <img src={fullImageUrl} height={150} width={400} />
                </Link>
            </div>
            <div className='mt-5 md:col-span-4 xl:col-span-4'>
                <Link href={`/product/${product.id}`}>
                    <h2 className='text-light font-bold text-2xl tracking-light'>
                        {product.name}
                    </h2>
                </Link>
            </div>

            <div className='mt-0 md:col-span-4 lg:col-span-4 xl:col-span-4'>
                <Link href={`/product/${product.id}`}>
                    <h2 className='text-light font-bold'>
                        Ksh {product.price}
                    </h2>
                </Link>
            </div>
            <div className='mt-0 md:col-span-4 lg:col-span-2'>
                <Link href={`/product/${product.id}`}>
                    <h2 className='text-light font-bold'>
                        {product.description}
                    </h2>
                </Link>
            </div>
            <div className='flex flex-col'>
                <CartButton product={product} addToCart={addToCart} quantity={quantity} overrideQuantity={overrideQuantity}/>

                <Link href={`/product/${product.id}`} className='m'>
                    <BuyButton />
                </Link>
            </div>
        </div>
    );
}

// Connect Product component to Redux store
export default connect(null, { addToCart })(Product); // Pass addToCart action as the second argument
