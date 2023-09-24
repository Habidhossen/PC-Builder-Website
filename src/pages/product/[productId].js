import MainLayout from "@/layouts/MainLayout";
import Image from "next/image";

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
    <div className="container mx-auto px-8 md:px-12 lg:px-20 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <Image src={imageUrl} alt={productName} height={500} width={500} />
        </div>

        <div>
          <h1 className="text-xl font-semibold mb-2">{productName}</h1>
          <p className="text-gray-600 mb-4">Category: {category}</p>
          <p className="text-green-600 mb-4">Status: {status}</p>
          <p className="text-2xl font-bold text-purple-700 mb-4">
            ${price.toFixed(2)}
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">{description}</p>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Key Features</h2>
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
