import Banner from "@/components/Banner";
import FeaturedCategories from "@/components/FeaturedCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";

export default function HomePage({ productData }) {
  return (
    <>
      <Head>
        <title>PC Builder Website</title>
        <meta name="description" content="This is PC Builder Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Banner />
      <FeaturedProducts productData={productData} />
      <FeaturedCategories productData={productData} />
    </>
  );
}

// For Layout
HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

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
