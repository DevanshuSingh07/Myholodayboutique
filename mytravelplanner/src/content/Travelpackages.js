// travelPackages.js
import pic1 from '../assets/1094.jpg'
import pic2 from '../assets/2104.jpg'
const travelPackages = [
    {
      id: 1,
      destination: "Bali, Indonesia",
      duration: "7 Days / 6 Nights",
      image:pic1,
      price: "$1,200",
      rating: 4.8,
      description: "Explore the beautiful beaches of Bali, experience the culture, and enjoy scenic views. Includes guided tours, accommodation, and meals.",
      highlights: [
        "Ubud Monkey Forest",
        "Tegallalang Rice Terrace",
        "Snorkeling in Nusa Penida",
        "Balinese Cooking Class"
      ],
    },
    {
      id: 2,
      destination: "Paris, France",
      duration: "5 Days / 4 Nights",
      price: "$1,500",
      image:pic2,
      rating: 4.9,
      description: "Experience the city of love with a romantic trip to Paris. Includes Eiffel Tower tickets, Seine River cruise, and guided city tours.",
      highlights: [
        "Eiffel Tower",
        "Louvre Museum",
        "Seine River Cruise",
        "Notre-Dame Cathedral"
      ],
    },
    {
      id: 3,
      destination: "Kyoto, Japan",
      duration: "6 Days / 5 Nights",
      price: "$1,300",
      rating: 4.7,
      description: "Discover Japan's ancient city of Kyoto with temple visits, traditional tea ceremonies, and scenic gardens.",
      image: "kyoto.jpg",
      highlights: [
        "Fushimi Inari Shrine",
        "Kinkaku-ji (Golden Pavilion)",
        "Arashiyama Bamboo Grove",
        "Gion District"
      ],
    },
    {
      id: 4,
      destination: "New York, USA",
      duration: "4 Days / 3 Nights",
      price: "$1,000",
      rating: 4.6,
      description: "Enjoy the hustle and bustle of the Big Apple. Includes tickets to famous attractions, Broadway shows, and city sightseeing tours.",
      image: "newyork.jpg",
      highlights: [
        "Statue of Liberty",
        "Times Square",
        "Central Park",
        "Broadway Show"
      ],
    },
    {
      id: 5,
      destination: "Sydney, Australia",
      duration: "8 Days / 7 Nights",
      price: "$1,800",
      rating: 4.9,
      description: "Explore the beauty of Sydney with visits to iconic landmarks, beaches, and wildlife adventures.",
      image: "sydney.jpg",
      highlights: [
        "Sydney Opera House",
        "Bondi Beach",
        "Blue Mountains",
        "Taronga Zoo"
      ],
    }
  ];
  
  export default travelPackages;
  