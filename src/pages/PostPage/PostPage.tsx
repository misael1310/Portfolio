import PostBanner from "./Components/PostBanner";
import PostContent from "./Components/PostContent";
import PostTitle from "./Components/PostTitle";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { useParams } from "react-router";
import { useFetchPostByIDQuery } from "../../features/posts/postsApi-slice";

export default function PostPage() {
  const { id } = useParams();
  const { data, error, isLoading } = useFetchPostByIDQuery(id as string);

  const renderContent = () => {
    if (isLoading) return "Loading...";

    if (error) {
      if ("status" in error && error.status === 404) {
        return <NotFoundPage />;
      }
      const errorMessage = "Something went wrong...";
      if ("data" in error && (error.data as { message?: string }).message) {
        return `${errorMessage} ${(error.data as { message: string }).message}`;
      }
      return errorMessage;
    }

    if (data) {
      return (
        <div className="pt-20">
          <PostBanner {...data} />
          <PostTitle title={data.post_title} />
          <PostContent />
        </div>
      );
    }
    return null;
  };

  return <>{renderContent()}</>;
}
