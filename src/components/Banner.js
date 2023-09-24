import Link from "next/link";

const Banner = () => {
  return (
    <section className="bg-white h-screen">
      <div className="container pt-60 md:pt-40 lg:pt-40 mx-auto relative text-center">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-snug md:leading-tight lg:leading-tight">
                Build Your <br />
                <span className="text-transparent bg-gradient-to-r from-[#ff7d1e] to-[#fd40e5] bg-clip-text">
                  Dream PC
                </span>{" "}
                Today!
              </h1>
              <p className="mt-4">
                Explore, Customize, and Create Your Perfect PC with Our
                Easy-to-Use Builder Tool. Start Building Your Ultimate Right
                Now.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="pc-builder"
                className="w-full px-8 py-3 mt-6 text-md text-white duration-300 transform bg-slate-950 rounded-lg lg:w-auto hover:bg-slate-800"
              >
                Build Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
