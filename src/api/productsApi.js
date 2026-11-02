import { products } from "../data/products";


function fetchProducts(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}
export default fetchProducts;