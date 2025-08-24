import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
};

const PostsComponent = () => {
  const { data, isLoading, isError, refetch } = useQuery('posts', fetchPosts);

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (isError) return <p className="text-center mt-10 text-red-500">Error fetching posts</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Posts</h1>
      <button
        onClick={() => refetch()}
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Refetch Posts
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map(post => (
          <div key={post.id} className="bg-white p-4 rounded shadow hover:shadow-lg">
            <h2 className="font-semibold text-lg mb-2">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsComponent;
