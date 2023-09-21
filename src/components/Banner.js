import Link from "next/link";

const Banner = () => {
  return (
    <section
      className="bg-gradient-to-b from-blue-50 to-blue-200 h-screen"
      style={{ maxHeight: `calc(100vh - 80px)` }}
    >
      <div className="container py-28 mx-auto relative text-center">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-1/2">
            <div>
              <h1 className="text-6xl font-extrabold leading-snug">
                Build Your <br />
                Dream PC Today
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
                className="w-full px-6 py-3 mt-6 text-sm text-white duration-300 transform bg-slate-950 rounded-lg lg:w-auto hover:bg-slate-800"
              >
                PC Builder
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
