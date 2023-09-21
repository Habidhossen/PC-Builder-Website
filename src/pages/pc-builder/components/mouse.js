import ComponentCard from "@/components/ComponentCard";
import Link from "next/link";

const MouseComp = ({ productData }) => {
  return (
    <section className="container mx-auto px-8 md:px-20 lg:px-60 py-12">
      <div className="text-center mb-8">
        <h1 className="text-xl font-bold">Mouse</h1>
        <p className="text-sm">Select Your Components</p>
      </div>

      {/* Breadcrumb */}
      <nav className="text-sm mb-8">
        <ol className="list-reset flex text-grey">
          <li className="mr-2">
            <Link href="/" className="text-blue-500 hover:underline">
              Home
            </Link>
          </li>
          <li className="mr-2">
            <span>&gt;</span>
          </li>
          <li className="mr-2">
            <Link href="/pc-builder" className="text-blue-500 hover:underline">
              PC Builder
            </Link>
          </li>
          <li className="mr-2">
            <span>&gt;</span>
          </li>
          <li className="text-gray-600 font-semibold">Mouse</li>
        </ol>
      </nav>

      {/* content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {productData.map((product) => (
          <ComponentCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default MouseComp;

// Data Fetching and Filtering by Category
export const getServerSideProps = async () => {
  const res = await fetch(
    "https://pc-builder-server-mtgs.onrender.com/api/v1/product"
  );
  const productData = await res.json();
  // filter data
  const filteredCpuProcessorProducts = productData?.data.filter(
    (product) => product.category === "Mouse"
  );
  return {
    props: {
      productData: filteredCpuProcessorProducts,
    },
  };
};
