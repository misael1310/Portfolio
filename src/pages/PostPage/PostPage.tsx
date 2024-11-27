import PostBanner from "./Components/PostBanner";
import PostContent from "./Components/PostContent";
import PostTitle from "./Components/PostTitle";
import { useFetchPostByIDQuery } from "../../features/posts/postsApi-slice";

export default function PostPage() {
  const { data, error, isLoading } = useFetchPostByIDQuery("1");

  if (isLoading) return "Loading...";
  if (error) return "Something went wrong...";

  return (
    data && (
      <>
        <PostBanner {...data} />
        <PostTitle title={data.post_title} />
        <PostContent />
      </>
    )
  );
}
