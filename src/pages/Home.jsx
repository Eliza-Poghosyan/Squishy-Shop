import Hero from '../components/Hero'
import ProductList from '../components/ProductList'

function Home({ onAddToCart }) {
  return (
    <>
      <Hero />
      <ProductList onAddToCart={onAddToCart} />
    </>
  )
}
export default Home;