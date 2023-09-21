import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import processorIcon from "../../assets/images/processor.webp";

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

  // Check if the "Complete Build" button should be disabled
  const isButtonDisabled =
    selectedComponents.length < 5 || selectedComponents.length > 6;

  return (
    <>
      <Head>
        <title>Build Your PC now</title>
      </Head>

      <section className="container mx-auto px-8 md:px-20 lg:px-60 py-12">
        <div className="bg-white px-4 py-6 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold">PC Builder</h1>
              <p>Select Your Components</p>
            </div>
            <div>
              <button
                className="px-5 py-3 text-white duration-150 bg-indigo-600 rounded-full hover:bg-indigo-500 active:bg-indigo-700"
                disabled={isButtonDisabled}
              >
                Complete Build
              </button>
            </div>
          </div>

          <hr />

          {/* content */}
          <div className="space-y-4 mt-4">
            {categories.map((category, index) => (
              <div className="" key={index}>
                <div className="bg-gray-100 rounded-lg px-4 py-5 flex items-center justify-between">
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

                {/* render selected components */}
                <div>
                  {selectedComponents
                    .filter((component) => component.category === category.name)
                    .map((component, componentIndex) => (
                      <div key={componentIndex}>
                        <div className="bg-white flex items-center justify-between px-4 py-2">
                          <div className="flex items-center gap-4">
                            <Image
                              src={processorIcon}
                              alt={component?.productName}
                              width={60}
                              height={60}
                            />
                            <div>
                              <h1 className="text-md font-semibold">
                                {component?.productName}
                              </h1>
                              <p className="text-sm">
                                {component?.description}
                              </p>
                            </div>
                          </div>
                          <div>
                            <p className="text-lg font-semibold">
                              ${component?.price}
                            </p>
                          </div>
                        </div>
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
