import ProductCard from "../components/ProductCard";

export const products = [
  { id: 1, name: "Apples", price: 120, image: "https://images.pexels.com/photos/588587/pexels-photo-588587.jpeg?cs=srgb&dl=apple-blur-bright-588587.jpg&fm=jpg" },
  { id: 2, name: "Bananas", price: 60, image: "https://th.bing.com/th/id/OIP.WhJ-dbnD4yczSSn_9aukugHaFj?w=251&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { id: 3, name: "Milk", price: 50, image: "https://th.bing.com/th/id/OIP.6gjQUzXpvoY91ymwIbev4wHaHa?w=181&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { id: 4, name: "Eggs", price: 70, image: "https://th.bing.com/th/id/OIP.OLfcOSyImw2f9W4A3fboxgHaFJ?w=274&h=191&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { id: 5, name: "Tomatoes", price: 40, image: "https://th.bing.com/th/id/OIP.QurEUPfQ6KKKIyDOTtkbLgHaFj?w=256&h=192&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { id: 6, name: "Potatoes", price: 30, image: "https://th.bing.com/th/id/OIP.u5TnriimvwcbqKG0EjjqSAHaE5?w=283&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { id: 7, name: "Bread", price: 45, image: "https://th.bing.com/th/id/OIP.Q_jrGRfNFvFYgZq7FNo1mwHaE7?w=259&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { id: 8, name: "Cheese", price: 150, image: "https://ts2.mm.bing.net/th?id=OIP.RoO8_3L1Qv1laeeiOFLNkAHaGN&pid=15.1" }
];

const Home = () => {
  return (
    <section className="w-full pt-24 bg-gray-50 min-h-screen">
      <div className="px-2 sm:px-4 md:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">
            Fresh Groceries Delivered to You
          </h1>
          <p className="mt-2 text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            Browse our handpicked selection of daily essentials – from farm-fresh fruits to dairy and bakery items.
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {products.map(product => (
            <div
              key={product.id}
              className="w-[80%] sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[20%] transition-transform duration-300 hover:scale-[1.02]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Home;
