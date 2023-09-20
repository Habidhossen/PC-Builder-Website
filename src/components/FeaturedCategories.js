import Link from "next/link";

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
    <section className="py-20 px-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Featured Category</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, nisi.
        </p>
      </div>

      {/* content */}
      <div className="grid grid-cols-3 gap-5">
        {categories
          .map((category, index) => (
            <div
              className="max-w-md bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transform hover:scale-105 transition duration-300"
              key={index}
            >
              <div className="p-4">
                <h2 className="text-gray-800 text-xl font-semibold">
                  {category.name}
                </h2>

                <div className="mt-4">
                  <Link
                    href={`/category/${category.slug}`}
                    className="text-blue-500 hover:text-blue-700 hover:underline"
                  >
                    Explore category
                  </Link>
                </div>
              </div>
            </div>
          ))
          .slice(0, 6)}
      </div>
    </section>
  );
};

export default FeaturedCategories;
