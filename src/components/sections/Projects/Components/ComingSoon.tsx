export default function ComingSoon() {
  const soonChars = ["S", "O", "O", "N"];
  return (
    <section id="projects" className="max-w-screen-xl m-auto pt-20 -mt-20">
      <div className="flex flex-col flex-wrap justify-center -mt-20 md:-mt-10 pb-10">
        <div className="my-10 px-6">
          <h2 className="text-4xl text-center lg:text-start lg:text-5xl text-ebony font-bold">
            Projects
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 px-4">
            {soonChars.map((char, index) => (
              <div key={index} className="wrapper flex flex-row flex-wrap">
                <div
                  id="Container"
                  className="relative max-w-80 aspect-square rounded-lg overflow-hidden group"
                >
                  <div className="w-80 lg:w-60 xl:w-80 aspect-square shadow-lg flex flex-col flex-wrap items-center justify-center bg-gradient-to-r from-slate-200 to-slate-300">
                    <p className="text-4xl text-center lg:text-start lg:text-5xl text-ebony font-bold">
                      {char}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
