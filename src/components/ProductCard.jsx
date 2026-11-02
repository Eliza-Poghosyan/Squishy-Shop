function ProductCard({product, onAddToCart}){
    
    return(
        <div className="bg-emerald-200/20 hover:bg-rose-400 text-teal-950 border-2 border-emerald-200/20 hover:border-rose-400 rounded-2xl hover:text-amber-50 p-3 transition-colors duration-300">
            <img className="h-56 w-56" src={product.image} />
            <div className="p-5">
                <p className="font-bold">{product.name}</p>
                <p className="font-sm">{product.description}</p>
                <p className="font-bold">{product.price}$</p>
                <button className="font-sm bg-green-200 hover:bg-amber-50 text-teal-950 border-2 font-bold rounded-full border-green-200 hover:border-amber-50 px-4 py-2 mt-2 hover:scale-105 active:scale-95 transition-transform"> Buy </button>
                <button 
                onClick = {() => onAddToCart(product)}
                className="font-sm bg-green-200 hover:bg-amber-50 text-teal-950 border-2 font-bold rounded-full border-green-200 hover:border-amber-50 px-4 py-2 mt-2 ml-2 hover:scale-105 active:scale-95 transition-transform"> Add</button>
            </div>
        </div>
    )
}
export default ProductCard;