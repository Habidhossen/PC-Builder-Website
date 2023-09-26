import MainLayout from "@/layouts/MainLayout";
import { removeFromBuilder } from "@/redux/features/builder/builderSlice";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const PcBuilderPage = () => {
  // categories data
  const categories = [
    { name: "CPU / Processor", slug: "cpu" },
    { name: "Motherboard", slug: "motherboard" },
    { name: "RAM", slug: "ram" },
    { name: "Power Supply Unit", slug: "psu" },
    { name: "Storage Device", slug: "storage" },
    { name: "Monitor", slug: "monitor" },
    { name: "GPU", slug: "gpu" },
    { name: "Mouse", slug: "mouse" },
    { name: "Keyboard", slug: "keyboard" },
  ];

  // Access the selected components from the Redux store
  const selectedComponents = useSelector(
    (state) => state.builder.selectedComponents
  );
  // access Dispatch
  const dispatch = useDispatch();

  // Check if the "Complete Build" button should be disabled
  const isButtonDisabled = selectedComponents.length < 5;

  // handle remove component button
  const handleRemoveCompButton = (product) => {
    dispatch(removeFromBuilder(product));

    // show toast
    toast.success("Removed from builder!");
  };

  return (
    <>
      <Head>
        <title>Build Your PC now</title>
      </Head>

      <section className="container mx-auto px-8 md:px-20 lg:px-60 py-24">
        <div className="bg-white px-4 py-6 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-xl font-bold">PC Builder</h1>
              <p className="text-sm">
                {selectedComponents?.length > 0
                  ? `Selected components: (${selectedComponents?.length})`
                  : "Select Your Components"}
              </p>
            </div>
            <div>
              <button
                onClick={() => toast.success("PC Build Completed!")}
                className={`px-6 py-3 text-white text-sm font-semibold rounded-full ${
                  isButtonDisabled
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#ff7d1e] to-[#fd40e5] hover:bg-gradient-to-l"
                }`}
                disabled={isButtonDisabled}
              >
                Complete Build
              </button>
            </div>
          </div>

          <hr />

          {/* content */}
          <div className="space-y-3 mt-4">
            {categories.map((category, index) => (
              <div className="" key={index}>
                <div className="bg-gray-50 rounded-md px-4 py-5 flex items-center justify-between">
                  <div>
                    <h2 className="text-gray-800 text-md font-semibold">
                      {category.name}
                    </h2>
                  </div>
                  <div>
                    {/* Use the correct href attribute */}
                    <Link
                      href={`/pc-builder/components/${category.slug}`}
                      className="px-4 py-2 text-slate-50 text-sm  bg-slate-900 rounded-lg hover:bg-slate-800"
                    >
                      Choose
                    </Link>
                  </div>
                </div>

                {/* render selected components from Redux Store */}
                <div>
                  {selectedComponents
                    .filter((component) => component.category === category.name)
                    .map((component, componentIndex, componentArray) => (
                      <div key={componentIndex}>
                        <div className="bg-white flex items-center justify-between px-4 py-5">
                          <div className="flex items-center gap-4 rounded-full">
                            <Image
                              // src={processorIcon}
                              src={component?.imageUrl}
                              alt={component?.productName}
                              width={60}
                              height={60}
                            />
                            <div>
                              <h1 className="text-md font-semibold">
                                {component?.productName}
                              </h1>
                              <p className="text-md font-bold text-[#ff7d1e]">
                                ${component?.price}
                              </p>
                              <p className="text-sm">
                                {component?.description}
                              </p>
                            </div>
                          </div>
                          <div>
                            <button
                              onClick={() => handleRemoveCompButton(component)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="red"
                                className="w-5 h-5"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M3 5a2 2 0 012-2h14a2 2 0 012 2v2H3V5zm15 4a1 1 0 00-1 1v9a1 1 0 01-1 1H8a1 1 0 01-1-1V10a1 1 0 00-2 0v9a3 3 0 003 3h8a3 3 0 003-3V10a1 1 0 00-1-1zm-8-1a1 1 0 011 1v7a1 1 0 01-2 0V9a1 1 0 011-1zm4 0a1 1 0 011 1v7a1 1 0 01-2 0V9a1 1 0 011-1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        {/* Conditionally render the horizontal line */}
                        {componentIndex !== componentArray.length - 1 && (
                          <hr className="border-b-1 border-gray-200 my-1" />
                        )}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
