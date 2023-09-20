import ProductCard from "./ProductCard";

const FeaturedProducts = ({ productData }) => {
  // get random product
  // const randomProducts = productData?.data
  //   .sort(() => Math.random() - 0.5)
  //   .slice(0, 6);

  return (
    <section className="h-screen py-20 px-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Featured Product</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, nisi.
        </p>
      </div>

      {/* content */}
      <div className="grid grid-cols-3 gap-5">
        {productData?.data
          .map((product) => <ProductCard key={product._id} product={product} />)
          .slice(0, 6)}
      </div>
    </section>
  );
};

export default FeaturedProducts;
