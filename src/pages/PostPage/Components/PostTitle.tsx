interface PostTitleProps {
  title: string;
}

export default function PostTitle({ title }: PostTitleProps) {
  return (
    <section
      id="post_title"
      className="max-w-screen-lg m-auto mt-16 md:pt-10 pb-5"
    >
      <h1 className="text-4xl lg:text-5xl text-ebony font-bold text-center sm:text-justify sm:mx-8">
        {title}
      </h1>
    </section>
  );
}
