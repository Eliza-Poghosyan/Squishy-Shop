import { Link, NavLink} from 'react-router-dom'


function Header({cart}) {
  return (
    <header className="sticky top-0 z-50 bg-teal-950 shadow-md">
      <div className="flex items-center justify-between px-25 py-5">
        <h1 className="text-emerald-200 text-2xl font-extrabold">SquishyShop</h1>
        <nav className="flex gap-6 md:gap-12 text-emerald-50 font-medium">
          <NavLink to="/" end className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/products" className="nav-link">Products</NavLink>
        </nav>
        <a className="text-amber-50 hover:text-rose-400 cursor-pointer">Cart ( {cart} ) </a>
        
        
      </div>
    </header>
  );
}
export default Header;