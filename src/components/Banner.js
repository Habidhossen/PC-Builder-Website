const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-200">
      <div className="container py-28 mx-auto relative text-center">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-1/2">
            <h1 className="text-5xl font-bold leading-snug">
              Best place to choose <br />
              your books.
            </h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              beatae error laborum ab amet sunt recusandae? Reiciendis natus
              perspiciatis optio.
            </p>
            <button className="w-full px-5 py-2 mt-6 text-sm text-white duration-300 transform bg-slate-950 rounded-lg lg:w-auto hover:bg-slate-800">
              PC Builder
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
