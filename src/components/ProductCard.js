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
      className="bg-white rounded-2xl flex flex-col items-center"
    >
      <Image
        src={imageUrl}
        alt={productName}
        width={300}
        height={300}
        className="rounded-2xl"
      />
      <div className="px-5 py-4">
        <h2 className="text-md font-semibold hover:underline">{productName}</h2>

        <div className="flex items-center mt-1">
          <div>
            <p
              className={`text-${
                status ? "green" : "red"
              }-600 text-sm font-semibold`}
            >
              {status ? "In Stock" : "Out of Stock"}
            </p>
          </div>

          {/* vertical line */}
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-300 space-x-2s"></span>

          <div className="flex items-center">
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
            <span className="text-xs font-medium">
              {individualRating} Stars
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-2">
          <p className="text-[#ff7d1e] text-lg font-bold">${price}</p>
          <span className="bg-orange-50 px-3 py-1 rounded-md text-[#ff7d1e] text-xs">
            {category}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
