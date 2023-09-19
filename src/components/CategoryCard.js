import Link from "next/link";

const CategoryCard = () => {
  return (
    <div className="max-w-md bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transform hover:scale-105 transition duration-300">
      <img src="" alt="" className="w-full h-56 object-cover" />
      <div className="p-4">
        <h2 className="text-gray-800 text-xl font-semibold">Motherboard</h2>
        <p className="text-gray-600 text-sm">
          Discover the latest category options.
        </p>
        <div className="mt-4">
          <Link
            href="/"
            className="text-blue-500 hover:text-blue-700 hover:underline"
          >
            Explore category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
