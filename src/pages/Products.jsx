import ProductList from '../components/ProductList'

function Products({ onAddToCart }) {
  return (
    <div className="pt-8">
      <ProductList onAddToCart={onAddToCart} />
    </div>
  )
}
export default Products;