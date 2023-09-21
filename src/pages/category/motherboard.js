import ProductCard from "@/components/ProductCard";
import MainLayout from "@/layouts/MainLayout";
import Link from "next/link";

const MotherboardPage = ({ productData }) => {
  return (
    <section className="container mx-auto px-8 md:px-12 lg:px-20 py-12">
      {/* Breadcrumb */}
      <nav className="text-md">
        <ol className="list-reset flex text-grey">
          <li className="mr-2">
            <Link href="/" className="text-blue-500 hover:underline">
              Home
            </Link>
          </li>
          <li className="mr-2">
            <span>&gt;</span>
          </li>
          <li className="text-gray-600 font-semibold">Motherboard</li>
        </ol>
      </nav>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-12">
        {productData.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default MotherboardPage;

MotherboardPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

// Data Fetching and Filtering by Category
export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-server-mtgs.onrender.com/api/v1/product"
  );
  const productData = await res.json();
  // filter data
  const filteredCpuProcessorProducts = productData?.data.filter(
    (product) => product.category === "Motherboard"
  );
  return {
    props: {
      productData: filteredCpuProcessorProducts,
    },
  };
};
