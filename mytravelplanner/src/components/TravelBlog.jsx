
// used in landing page
const TravelBlog = () => {
    const blogPosts = [
      {
        title: '10 Tips for a Stress-Free Vacation',
        snippet: 'Learn how to plan a relaxing vacation with our expert tips...',
        image: 'vacation-tips.jpg',
      },
      {
        title: 'Top 5 Destinations for Adventure Lovers',
        snippet: 'From hiking trails to extreme sports, discover the best spots...',
        image: 'adventure.jpg',
      },
    ];
  
    return (
      <section className="travel-blog py-16 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-8">From Our Blog</h2>
        <div className="flex justify-center gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card p-4 bg-white shadow-lg rounded-md">
              <img src={post.image} alt={post.title} className="rounded-lg w-full h-40 object-cover mb-4" />
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.snippet}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TravelBlog;
  