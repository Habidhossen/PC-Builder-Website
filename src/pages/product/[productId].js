import MainLayout from "@/layouts/MainLayout";
import Image from "next/image";
import Link from "next/link";

const ProductDetailPage = ({ product }) => {
  const {
    productName,
    category,
    status,
    price,
    description,
    keyFeatures,
    individualRating,
    averageRating,
    reviews,
    imageUrl,
  } = product;

  return (
    <section className="bg-white pt-28 pb-20">
      <div className="container mx-auto px-8 md:px-12 lg:px-20">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <ol className="list-reset flex text-grey">
            <li className="mr-2">
              <Link
                href="/"
                className="text-black font-semibold hover:underline"
              >
                Home
              </Link>
            </li>
            <li className="mr-2">
              <span>&gt;</span>
            </li>
            <li className="text-transparent bg-gradient-to-l from-[#ff7d1e] to-[#fd40e5] bg-clip-text font-semibold">
              Product Details
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div>
            <Image
              src={imageUrl}
              alt={productName}
              height={500}
              width={500}
              className="rounded-2xl shadow-2xl"
            />
          </div>

          <div>
            <h1 className="text-xl font-bold mb-2">{productName}</h1>
            <div className="flex">
              <p className="text-green-600">Status: {status}</p>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-300 space-x-2s"></span>
              <p>Category: {category}</p>
            </div>
            <p className="text-gray-800 leading-relaxed mt-4">{description}</p>
            <p className="text-3xl font-bold text-[#ff7d1e] my-5">
              ${price.toFixed(2)}
            </p>
            <div className="mb-4">
              <h2 className="text-md font-semibold mb-2">Key Features:</h2>
              <ul className="list-disc list-inside">
                {keyFeatures.map((feature) => (
                  <li key={feature._id}>
                    {feature.key}: {feature.value}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex">
              <p className="text-sm text-green-600">
                Individual Rating: {individualRating}
              </p>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-300 space-x-2s"></span>
              <p className="text-sm">Average Rating: {averageRating}</p>
            </div>
            <div>
              <h2 className="text-md font-semibold mb-4 mt-6">
                Reviews ({reviews.length})
              </h2>
              {reviews.length === 0 ? (
                <p>No reviews available</p>
              ) : (
                <div>
                  {/* review card */}
                  {reviews.map((review, index, reviewsArray) => (
                    <div key={review._id}>
                      <div className="flex items-center gap-x-3">
                        <Image
                          width={100}
                          height={100}
                          alt="review cover"
                          src="https://media.istockphoto.com/id/1008484130/vector/creative-vector-illustration-of-default-avatar-profile-placeholder-isolated-on-background.jpg?s=612x612&w=0&k=20&c=H57e2HUi6qDyPoBl8Om1dlX22--BqgGp64cFKsywWZ0="
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <span className="text-xs font-semibold">
                            {review?.username}
                          </span>
                          <div className="flex items-center gap-3 mt-1 text-xs">
                            {/* render star based on ratings */}
                            <span className="flex items-center">
                              {Array.from({ length: 5 }, (_, index) => (
                                <svg
                                  key={index}
                                  fill={
                                    index < review?.rating
                                      ? "currentColor"
                                      : "none"
                                  }
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  className="w-4 h-4 text-[#ff7d1e]"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                              ))}
                            </span>
                            {review?.rating} out of 5
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="mt-2 text-xs">{review?.comments}</p>
                      </div>
                      {/* Conditionally render the horizontal line */}
                      {index !== reviewsArray.length - 1 && (
                        <hr className="border-b-1 border-gray-200 my-3" />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

// getStaticPaths() for get specific product ID
export const getStaticPaths = async () => {
  const res = await fetch(
    "https://pc-builder-server-mtgs.onrender.com/api/v1/product"
  );
  const products = await res.json();

  const paths = products?.data.map((product) => ({
    params: { productId: product._id },
  }));

  return { paths, fallback: false };
};

// Now fetching data by getStaticProps()
export const getStaticProps = async ({ params }) => {
  // get product Id from params
  const { productId } = params;

  // Fetch data for the specific Product ID
  const res = await fetch(
    `https://pc-builder-server-mtgs.onrender.com/api/v1/product/${productId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data?.data,
    },
  };
};
