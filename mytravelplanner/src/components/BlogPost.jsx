import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogPosts from '../content/BlogPosts.js'

const BlogPost = () => {
  const { id } = useParams();
  console.log(id);
  
  const blogPost = blogPosts.find((post) => post.id === parseInt(id));

  if (!blogPost) {
    return <p>Blog post not found.</p>;
  }

  return (
    <section className="blog-post py-16 px-8">
      <Link to="/blog" className="text-blue-600 hover:underline mb-4 block">Back to Blog</Link>
      <img src={blogPost.image} alt={blogPost.title} className="rounded-lg w-full h-80 object-cover mb-8" />
      <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
      <p className="text-sm text-gray-600 mb-2">By {blogPost.author} | {blogPost.date}</p>
      <div className="text-lg text-gray-700 leading-relaxed">
        {blogPost.content.split('\n').map((paragraph, idx) => (
          <p key={idx} className="mb-4">{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default BlogPost;
