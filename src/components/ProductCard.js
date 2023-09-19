import Link from "next/link";

const ProductCard = () => {
  // Dummy data for the PC component card
  const dummyData = {
    imageSrc: "/dummy-image.jpg",
    productName: "Sample Product",
    category: "CPU / Processor",
    price: 299.99,
    inStock: true,
    rating: 4.5,
  };

  const { imageSrc, productName, category, price, inStock, rating } = dummyData;

  return (
    <div className="max-w-md bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300">
      <img
        src={imageSrc}
        alt={productName}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h2 className="text-gray-800 text-xl font-semibold">{productName}</h2>
        <p className="text-gray-600 text-sm">{category}</p>
        <p className="text-gray-700 text-2xl font-semibold mt-2">${price}</p>
        <p
          className={`text-${
            inStock ? "green" : "red"
          }-600 text-sm font-semibold mt-1`}
        >
          {inStock ? "In Stock" : "Out of Stock"}
        </p>
        <div className="flex items-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-500 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span className="text-gray-600 text-sm">{rating} Stars</span>
        </div>
        <div className="mt-4">
          <Link
            href="/product/[id]"
            as={`/product/${productName.replace(/\s/g, "-")}`}
            className="text-blue-500 hover:text-blue-700 hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
