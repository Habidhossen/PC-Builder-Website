import ProductCard from "./ProductCard";

const FeaturedProducts = ({ productData }) => {
  // get random product
  // const randomProducts = productData?.data
  //   .sort(() => Math.random() - 0.5)
  //   .slice(0, 6);

  return (
    <section className="container mx-auto px-8 md:px-12 lg:px-20 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">
          Featured{" "}
          <span className="text-transparent bg-gradient-to-r from-[#ff7d1e] to-[#fd40e5] bg-clip-text">
            Products
          </span>
        </h1>
        <p className="text-transparent bg-gradient-to-l from-[#ff7d1e] to-[#fd40e5] bg-clip-text text-lg font-medium">
          Check & Get Your Desired Product!
        </p>
      </div>

      {/* content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productData?.data
          .map((product) => <ProductCard key={product._id} product={product} />)
          .slice(0, 6)}
      </div>
    </section>
  );
};

export default FeaturedProducts;
