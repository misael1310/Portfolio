import parseContent from "../../../utils/parseContent";

interface PostContentProps {
  content: string;
}

export default function PostContent({ content }: PostContentProps) {
  return (
    <section id="post_content" className="max-w-screen-lg m-auto mb-10">
      <div className="flex flex-col bg-white shadow-lg rounded-xl p-8 mx-4 sm:mx-8">
        <div className="prose max-w-screen-lg">{parseContent(content)}</div>
      </div>
    </section>
  );
}
