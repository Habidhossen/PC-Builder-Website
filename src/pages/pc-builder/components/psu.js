import ComponentCard from "@/components/ComponentCard";

const PowerSupplyUnitComp = ({ productData }) => {
  return (
    <section className="py-20 px-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Power Supply Unit</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, nisi.
        </p>
      </div>

      {/* content */}
      <div className="grid grid-cols-3 gap-5">
        {productData.map((product) => (
          <ComponentCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default PowerSupplyUnitComp;

// Data Fetching and Filtering by Category
export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-server-mtgs.onrender.com/api/v1/product"
  );
  const productData = await res.json();
  // filter data
  const filteredCpuProcessorProducts = productData?.data.filter(
    (product) => product.category === "Power Supply Unit"
  );
  return {
    props: {
      productData: filteredCpuProcessorProducts,
    },
  };
};
