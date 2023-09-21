import ProductCard from "./ProductCard";

const FeaturedProducts = ({ productData }) => {
  // get random product
  // const randomProducts = productData?.data
  //   .sort(() => Math.random() - 0.5)
  //   .slice(0, 6);

  return (
    <section className="container mx-auto px-8 md:px-12 lg:px-20 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Featured Products</h1>
        <p>Check & Get Your Desired Product!</p>
      </div>

      {/* content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productData?.data
          .map((product) => <ProductCard key={product._id} product={product} />)
          .slice(0, 6)}
      </div>
    </section>
  );
};

export default FeaturedProducts;
