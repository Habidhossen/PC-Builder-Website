import { addToBuilder } from "@/redux/features/builder/builderSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const ComponentCard = ({ product }) => {
  const {
    _id,
    productName,
    category,
    status,
    price,
    imgUrl,
    individualRating,
  } = product;

  // get router object from useRouter() hook
  const router = useRouter();

  // redux dispatch method
  const dispatch = useDispatch();

  const handleAddToBuilderBtn = () => {
    // Dispatch the addToBuilder action with the selected component
    dispatch(addToBuilder(product));

    // Redirect to the pc builder page
    router.push("/pc-builder");

    // show toast
    toast.success("Successfully added to builder!");
  };

  return (
    <div className="bg-white rounded-xl">
      <Image
        src={imgUrl}
        alt={productName}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h2 className="text-gray-800 text-lg font-semibold">{productName}</h2>
        <p className="text-gray-600 text-sm">{category}</p>
        <p className="text-gray-700 text-2xl font-semibold mt-2">${price}</p>
        <p
          className={`text-${
            status ? "green" : "red"
          }-600 text-sm font-semibold mt-1`}
        >
          {status ? "In Stock" : "Out of Stock"}
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
          <span className="text-gray-600 text-sm">
            {individualRating} Stars
          </span>
        </div>
        <div className="mt-4">
          <button
            onClick={handleAddToBuilderBtn}
            className="w-full px-4 py-2 text-slate-50 text-sm  bg-slate-900 rounded-lg hover:bg-slate-800"
          >
            Add to Builder
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComponentCard;
