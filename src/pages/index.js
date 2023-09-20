import Banner from "@/components/Banner";
import FeaturedProducts from "@/components/FeaturedProducts";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home({ productData }) {
  return (
    <>
      <Head>
        <title>PC Builder Website</title>
        <meta name="description" content="This is PC Builder Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Banner />
      <FeaturedProducts productData={productData} />
    </>
  );
}

// Data Fetching by getStaticProps() function
export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-server-mtgs.onrender.com/api/v1/product"
  );
  const data = await res.json();
  return {
    props: {
      productData: data,
    },
  };
};
