import Image from "next/image";
import Link from "next/link";
import categoryImg from "../assets/images/category.webp";

const FeaturedCategories = ({ productData }) => {
  // categories data
  const categories = [
    { name: "CPU / Processor", slug: "cpu" },
    { name: "Motherboard", slug: "motherboard" },
    { name: "RAM", slug: "ram" },
    { name: "Power Supply Unit", slug: "psu" },
    { name: "Storage Device", slug: "storage" },
    { name: "Monitor", slug: "monitor" },
    { name: "GPU", slug: "gpu" },
    { name: "Mouse", slug: "mouse" },
    { name: "Keyboard", slug: "keyboard" },
  ];

  return (
    <section className="container mx-auto px-8 md:px-12 lg:px-20 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Featured Category</h1>
        <p>Get Your Desired Product from Featured Category!</p>
      </div>

      {/* content */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {categories
          .map((category, index) => (
            <Link
              href={`/category/${category.slug}`}
              className="bg-white rounded-lg"
              key={index}
            >
              <div className="p-4 flex flex-col items-center gap-3">
                <Image
                  src={categoryImg}
                  alt={category.name}
                  width={70}
                  height={70}
                />
                <h2 className="text-gray-800 text-md font-semibold">
                  {category.name}
                </h2>
              </div>
            </Link>
          ))
          .slice(0, 6)}
      </div>
    </section>
  );
};

export default FeaturedCategories;
