import { useState, useEffect} from 'react';
import ProductCard from './ProductCard';
import fetchProducts from '../api/productsApi';



function ProductList({onAddToCart}){

    const[data,setData] = useState({});
    const[isLoading, setIsLoading] = useState(true);
    const[isError,setIsError] = useState(false);

    useEffect(() => {
        async function loadProducts(){
            try{
                setIsLoading(true);
                setIsError(false);

                const productsData = await fetchProducts()
                setData(productsData)

            } catch{
                setIsError(true)
            } finally{
                setIsLoading(false);
            }
        }
        loadProducts();
    }, []);

    if (isLoading){
        return(
            <section>
                <p>Loading</p>
            </section>
        )
    }
    if (isError){
        return(
            <section>
                <p>Loading</p>
            </section>
        )
    }

    return(
        <section>
            <div className='pl-25 pr-25'>
                <h2 className='text-4xl md:text-2xl font-extrabold'> NEW!</h2>
                <p className='text-xl md:text-2xl font-bold'>Perfect Squishies For You</p>
            </div>

            {isLoading ? <p>Loading...</p> : isError ? <p>Error</p> : (

                <div className='flex flex-wrap justify-between gap pb-8 pt-8 my-5 mx-25'>
                    {data?.data?.map(item => (
                        <ProductCard
                        product={item}
                        key={item.id}
                        onAddToCart={onAddToCart}/>
                        ))
                    }
                </div>
            )}

        </section>
    
    )
}
export default ProductList;