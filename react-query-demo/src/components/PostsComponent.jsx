import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

function PostsComponent() {
  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery(["posts"], fetchPosts, {
    staleTime: 5000,              // Data considered fresh for 5s
    cacheTime: 1000 * 60 * 5,     // Cache persists for 5 min
    refetchOnWindowFocus: true,   // Auto refetch when window regains focus
    keepPreviousData: true,       // Keep old data when fetching new
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()} style={{ marginBottom: "10px" }}>
        {isFetching ? "Refetching..." : "Refetch Posts"}
      </button>
      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      <
