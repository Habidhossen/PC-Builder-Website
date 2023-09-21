import Head from "next/head";
import Link from "next/link";
import { useSelector } from "react-redux";

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

  console.log(selectedComponents);

  return (
    <>
      <Head>
        <title>Build Your PC now</title>
      </Head>
      <section className="py-20 px-60">
        <div className="text-center">
          <h1 className="text-3xl font-bold">PC Builder Page</h1>
        </div>

        {/* content */}
        <div className="space-y-5">
          {categories.map((category, index) => (
            <div
              className="bg-slate-100 flex items-center justify-between"
              key={index}
            >
              <div className="p-4">
                <h2 className="text-gray-800 text-xl font-semibold">
                  {category.name}
                </h2>
              </div>
              <div>
                <Link
                  href={`pc-builder/components/${category.slug}`}
                  className="mt-4 bg-emerald-700 text-white p-2 rounded-lg"
                >
                  Choose
                </Link>
              </div>
            </div>
          ))}
          <div>
            {selectedComponents.map((component, index) => (
              <div key={index}>
                <h1>{component?.productName}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PcBuilderPage;
