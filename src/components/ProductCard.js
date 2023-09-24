import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const {
    _id,
    productName,
    category,
    status,
    price,
    imageUrl,
    individualRating,
  } = product;

  return (
    <Link
      href={`/product/${_id}`}
      className="bg-white  rounded-3xl flex flex-col items-center"
    >
      <Image src={imageUrl} alt={productName} width={300} height={300} />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1 hover:underline">
          {productName}
        </h2>
        <span className="bg-emerald-100 px-3 py-1 rounded-md text-emerald-700 text-xs">
          {category}
        </span>
        <p className="text-gray-700 text-lg font-semibold mt-4">${price}</p>
        <div className="flex items-center justify-between">
          <div>
            <p
              className={`text-${
                status ? "green" : "red"
              }-600 text-sm font-semibold mt-1`}
            >
              {status ? "In Stock" : "Out of Stock"}
            </p>
          </div>
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
            <span className="text-gray-600 text-sm">
              {individualRating} Stars
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
