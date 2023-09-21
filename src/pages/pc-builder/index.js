import Head from "next/head";
import Link from "next/link";

const PcBuilderPage = () => {
  // categories data
  const categories = [
    { _id: "1", name: "CPU / Processor", slug: "cpu" },
    { _id: "2", name: "Motherboard", slug: "motherboard" },
    { _id: "3", name: "RAM", slug: "ram" },
    { _id: "4", name: "Power Supply Unit", slug: "psu" },
    { _id: "5", name: "Storage Device", slug: "storage" },
    { _id: "6", name: "Monitor", slug: "monitor" },
    { _id: "7", name: "GPU", slug: "gpu" },
    { _id: "8", name: "Mouse", slug: "mouse" },
    { _id: "9", name: "Keyboard", slug: "keyboard" },
  ];

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
        </div>
      </section>
    </>
  );
};

export default PcBuilderPage;
