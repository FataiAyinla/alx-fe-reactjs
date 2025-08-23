import { useParams } from "react-router-dom";

export default function Post() {
  const { postId } = useParams();
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Post #{postId}</h2>
      <p>This is the content for post {postId}.</p>
    </div>
  );
}
