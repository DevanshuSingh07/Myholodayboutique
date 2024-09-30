import del1 from '../assets/borabora1.jpg'
import del2 from '../assets/borabora2.jpg'
const FeaturedDeals = () => {
    const deals = [
      { title: '25% Off Maldives Package', validUntil: '30th September 2024', image: del1 },
      { title: 'Early Bird Offer: Save ₹5,000 on Europe Tours', validUntil: '15th October 2024', image: del2 },
    ];
  
    return (
      <section className="featured-deals py-16">
        <h2 className="text-center text-3xl font-bold mb-10">Featured Deals</h2>
        <div className="flex justify-center gap-8">
          {deals.map((deal, index) => (
            <div key={index} className="deal-card p-6 bg-white shadow-lg rounded-md">
              <img src={deal.image} alt={deal.title} className="rounded-lg w-full h-48 object-cover mb-4" />
              <h3 className="text-lg font-semibold">{deal.title}</h3>
              <p className="text-sm text-gray-600">Valid until {deal.validUntil}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default FeaturedDeals;
  