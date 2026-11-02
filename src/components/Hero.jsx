import { Link } from 'react-router-dom'
function Hero() {

  return (
    <section className="bg-teal-800/20 text-cyan-950 py-18 my-12 rounded-3xl mx-25">
      <div className="px-24 py-2">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Squish Your First
        </h1>
        <h2 className="text-4xl md:text-8xl font-extrabold">
          Squishy!
        </h2>
        <p className="mt-4 text-lg md:text-xl">
          A Little Squish, A Lot of Joy!
        </p>
        <Link 
          to="/products"
          className="inline-block mt-8 bg-rose-400/90 hover:bg-rose-400/70 text-cyan-950 font-bold rounded-full px-8 py-3 hover:scale-105 active:scale-95 transition-transform">
          Shop squishies
        </Link>
      </div>
      
    </section>
  );
}
export default Hero;
