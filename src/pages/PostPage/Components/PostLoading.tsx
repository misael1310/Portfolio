import "../Styles/PostLoading.css";

export default function PostLoading() {
  return (
    <>
      <div className="pt-20">
        <section id="post_banner" className="pt-4 md:pt-0">
          <div
            id="parallax_container"
            className="relative bg-loading shadow-lg"
          >
            <div
              id="parallax_content"
              className="max-w-screen-lg m-auto flex justify-center"
            >
              <div
                id="parallax_banner_container"
                className="w-11/12 md:w-auto max-w-screen-lg pt-10 pb-10 md:pb-0 md:-mb-16"
              >
                <div className="aspect-[20/28] sm:aspect-[28/39] md:aspect-[31/36] lg:aspect-[31/27] xl:aspect-[33/23] bg-black/[0.7] rounded-xl shadow-lg loading_animation">
                  <div className="w-[421px] h-[591px] sm:w-[586px] sm:h-[809px] md:w-[549px] md:h-[640px] lg:w-[640px] lg:h-[557px] xl:w-[640px] xl:h-[448px]"></div>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="post_title"
          className="max-w-screen-lg m-auto mt-16 md:pt-10 pb-5"
        >
          <h1 className="text-4xl lg:text-5xl text-ebony font-bold text-center sm:text-justify sm:mx-8">
            Loading<span className="dots"></span>
          </h1>
        </section>
        <section id="post_content" className="max-w-screen-lg m-auto mb-10">
          <article className="flex flex-col bg-white shadow-lg rounded-xl p-8 mx-4 sm:mx-8 h-screen loading_animation"></article>
        </section>
      </div>
    </>
  );
}
