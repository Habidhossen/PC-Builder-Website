const FeaturedProducts = ({ productData }) => {
  console.log(productData);
  return (
    <section className="h-screen py-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Featured Product</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, nisi.
        </p>
      </div>

      {/* content */}
      <div className="grid grid-cols-3 gap-5"></div>
    </section>
  );
};

export default FeaturedProducts;
