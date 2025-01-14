import React, { useEffect } from 'react'
import { doGetProductRequest } from '../../redux/actions/Product';
import { doAddToCart } from '../../redux/actions/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from "react-router-dom";
import config from '../../config/config';


export default function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productState.products);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const payload = {}
        dispatch(doGetProductRequest(payload));
    }

    const addToCart=(id)=>{
        const payload ={}
       dispatch(doAddToCart(payload))
    }

    return (
        <div class="bg-white">
            <div class="max-w-2xl mx-auto py-16 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products && products.map(prod => (
                        <div class="group relative">
                            <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img src={`${config.urlImage}/${prod.prod_urlimage}`} alt="Front of men&#039;s Basic Tee in black." class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                            </div>
                            <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                        <Link to="/artaka/">
                                            <span aria-hidden="true" class="absolute"></span>
                                            {prod.prod_name}    
                                        </Link>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">{prod.prod_desc}</p>
                                </div>
                                <p class="text-xs font-medium text-gray-900">Rp. {new Intl.NumberFormat('ID').format(prod.prod_price)}</p>
                            </div>
                            <div className="flex">  
                                <button
                                    type="button"
                                    className="flex-1 mt-3 ml-3 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grey-500"
                                    onClick={() => {
                                        addToCart(prod.prod_id)
                                    }}
                                >
                                    Tambah ke Keranjang
                                </button>
                                
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}
