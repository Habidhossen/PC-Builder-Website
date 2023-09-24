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
      <div className="container mx-auto px-8 md:px-12 lg:px-20 h-screen">
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
              Product Detail
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
            <p className="text-3xl font-bold text-[#fd40e5] my-5">
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
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Individual Rating</h2>
              <div className="flex items-center space-x-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={index}
                    className={`text-yellow-400 ${
                      index < individualRating ? "opacity-100" : "opacity-30"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            {averageRating && (
              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Average Rating</h2>
                <div className="flex items-center space-x-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <span
                      key={index}
                      className={`text-yellow-400 ${
                        index < averageRating ? "opacity-100" : "opacity-30"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div>
              <h2 className="text-xl font-semibold mb-2">Reviews</h2>
              {reviews.length === 0 ? (
                <p>No reviews available</p>
              ) : (
                <div>
                  {reviews.map((review) => (
                    <div
                      key={review._id}
                      className="border-b border-gray-300 py-2"
                    >
                      <p className="text-gray-600">{review.text}</p>
                      <div className="flex items-center space-x-2">
                        {Array.from({ length: 5 }, (_, i) => (
                          <span
                            key={i}
                            className={`text-yellow-400 ${
                              i < review.rating ? "opacity-100" : "opacity-30"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
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
