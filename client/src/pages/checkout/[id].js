import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsDetails } from '../../actions/productActions';
import CreateMpesaComponent from '../../components/CreateMpesaComponent';
import ChargeMpesaComponent from '../../components/ChargeMpesaComponent';
import Message from '../../components/Message';
import UserAddressComponent from '../../components/UserAddressComponent';
import Link from 'next/link';

const CheckoutPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const dispatch = useDispatch();
    const [addressSelected, setAddressSelected] = useState(false);
    const [selectedAddressId, setSelectedAddressId] = useState(0);

    const createMpesaReducer = useSelector(state => state.mpesaStkPushReducer);
    const { error: mpesaCreationError, success, loading: mpesaCreationLoading } = createMpesaReducer;

    const handleAddressId = (id) => {
        if (id) {
            setAddressSelected(true);
        }
        setSelectedAddressId(id);
    };

    const productDetailsReducer = useSelector(state => state.productDetailsReducer);
    const { loading, error, product } = productDetailsReducer;

    const baseUrl = 'http://localhost:8000';
    const fullImageUrl = baseUrl + product.image;

    useEffect(() => {
        if (id) {
            dispatch(getProductsDetails(id));
        }
    }, [dispatch, id]);

    return (
        <div className="container mx-auto px-4 py-10 text-light mt-10">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                <div className="p-4 mb-8 rounded-lg bg-gray-800">
                    <h3 className="text-3xl md:text-6xl font-bold mb-6">Checkout Summary</h3>
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <Message variant="danger">{error}</Message>
                    ) : (
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="mt-4 md:mt-0">
                                <p className="font-semibold text-xl md:text-3xl text-gray-400">{product.name}</p>
                                <hr className="my-4 border-gray-700" />
                                <p className="text-gray-500 text-lg">{product.description}</p>
                                <p className="text-primary mt-6">
                                    Price: <span className="text-light ml-2">Ksh {product.price}</span>
                                </p>
                            </div>
                            <div className="relative">
                                <img src={fullImageUrl} alt={product.name} width={550} height={500} className="rounded-lg" />
                            </div>
                        </div>
                    )}

                    <h3 className="text-3xl md:text-6xl font-bold mt-10 mb-4 flex">Billing Address</h3>
                    <Link href="/AllAddressesOfUserPage" className="cursor-pointer font-semibold hover:text-accent">
                        Edit/Add Address
                    </Link>
                    <UserAddressComponent handleAddressId={handleAddressId} />
                </div>

                <div className="p-4 mb-8 rounded-lg bg-gray-800">
                    <h3 className="text-3xl md:text-6xl font-bold mb-4">Payments Section</h3>
                    <ChargeMpesaComponent
                        selectedAddressId={selectedAddressId}
                        addressSelected={addressSelected}
                        id={id}
                    />
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
