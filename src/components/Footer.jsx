import { Link } from 'react-router-dom'

function Footer(){
    return ( 
        <div>
            <footer className="sticky bottom-0 bg-teal-950  mt-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-50 py-25">
                    <h2 className="text-emerald-200 text-xl font-extrabold">SquishyShop</h2>
                    <nav className="flex gap-6 text-emerald-50 font-medium">
                        <Link to="/" className="hover:text-rose-400 transition-colors">Home</Link>
                        <Link to="/about" className="hover:text-rose-400 transition-colors">About</Link>
                        <Link to="/products" className="hover:text-rose-400 transition-colors">Products</Link>
                    </nav>
                    <p className="text-emerald-50 text-sm">© 2026 SquishyShop</p>
                </div>
            </footer>
        </div>
    );
}
export default Footer;