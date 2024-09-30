import React from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../content/BlogPosts';

const BlogPage = () => {
  return (
    <section className="blog-list py-16">
      <h2 className="text-center text-3xl font-bold mb-8">From Our Blog</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card w-80 bg-white shadow-lg rounded-md p-4">
            <img src={post.image} alt={post.title} className="rounded-lg w-full h-40 object-cover mb-4" />
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{post.snippet}</p>
            <Link to={`/aloneblog/${post.id}`} className="text-blue-600 hover:underline">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
