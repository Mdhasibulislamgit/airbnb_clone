const sampleListings = [
    {
      "title": "Cozy Studio in Downtown",
      "description": "A compact and comfortable studio apartment perfect for solo travelers or couples exploring the city.",
      "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "price": 75,
      "location": "New York City",
      "country": "USA"
    },
    {
      "title": "Luxury Suite with Ocean View",
      "description": "Indulge in our spacious luxury suite offering breathtaking views of the Pacific Ocean.",
      "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      "price": 350,
      "location": "Maui",
      "country": "USA"
    },
    {
      "title": "Rustic Mountain Cabin",
      "description": "Experience the charm of a traditional wooden cabin nestled in the heart of the Rockies.",
      "image": "https://images.unsplash.com/photo-1518732714860-b62714ce0c59",
      "price": 120,
      "location": "Aspen",
      "country": "USA"
    },
    {
      "title": "Modern Loft in Arts District",
      "description": "Stay in a trendy loft apartment surrounded by galleries, cafes, and boutiques.",
      "image": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      "price": 180,
      "location": "Los Angeles",
      "country": "USA"
    },
    {
      "title": "Beachfront Bungalow",
      "description": "Wake up to the sound of waves in this charming bungalow just steps from the beach.",
      "image": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
      "price": 200,
      "location": "Phuket",
      "country": "Thailand"
    },
    {
      "title": "Historic Townhouse in Old Town",
      "description": "Immerse yourself in history with a stay in our beautifully restored 18th-century townhouse.",
      "image": "https://images.unsplash.com/photo-1533443144047-ea8a81e83e68",
      "price": 220,
      "location": "Edinburgh",
      "country": "UK"
    },
    {
      "title": "Ski-in/Ski-out Chalet",
      "description": "Hit the slopes right from your doorstep in this cozy alpine chalet.",
      "image": "https://images.unsplash.com/photo-1517320964276-a002fa203177",
      "price": 280,
      "location": "Chamonix",
      "country": "France"
    },
    {
      "title": "Zen Garden Retreat",
      "description": "Find peace and tranquility in our traditional Japanese-style accommodation with a private garden.",
      "image": "https://images.unsplash.com/photo-1503787722143-8ae936b1f360",
      "price": 150,
      "location": "Kyoto",
      "country": "Japan"
    },
    {
      "title": "Penthouse with City Skyline View",
      "description": "Enjoy panoramic views of the city from our luxurious top-floor penthouse.",
      "image": "https://images.unsplash.com/photo-1576675784201-0e142b423952",
      "price": 400,
      "location": "Singapore",
      "country": "Singapore"
    },
    {
      "title": "Eco-friendly Treehouse",
      "description": "Stay in a unique treehouse built with sustainable materials, surrounded by lush rainforest.",
      "image": "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7",
      "price": 180,
      "location": "Costa Rica",
      "country": "Costa Rica"
    },
    {
      "title": "Art Deco Hotel Room",
      "description": "Step back in time with a stay in our meticulously preserved Art Deco hotel room.",
      "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      "price": 190,
      "location": "Miami",
      "country": "USA"
    },
    {
      "title": "Overwater Bungalow",
      "description": "Experience luxury and privacy in our overwater bungalow with direct access to the lagoon.",
      "image": "https://images.unsplash.com/photo-1439130490301-25e322d88054",
      "price": 500,
      "location": "Bora Bora",
      "country": "French Polynesia"
    },
    {
      "title": "Urban Micro-apartment",
      "description": "Cleverly designed micro-apartment in the heart of the city, perfect for minimalist travelers.",
      "image": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      "price": 80,
      "location": "Tokyo",
      "country": "Japan"
    },
    {
      "title": "Converted Windmill Guesthouse",
      "description": "Stay in a piece of history with our uniquely converted windmill offering 360-degree countryside views.",
      "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      "price": 160,
      "location": "Amsterdam",
      "country": "Netherlands"
    },
    {
      "title": "Desert Oasis Resort",
      "description": "Luxuriate in our desert resort complete with private pool and stunning dune views.",
      "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      "price": 300,
      "location": "Dubai",
      "country": "UAE"
    },
    {
      "title": "Riverside Cottage",
      "description": "Charming cottage on the banks of a peaceful river, perfect for a relaxing getaway.",
      "image": "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904",
      "price": 140,
      "location": "Cotswolds",
      "country": "UK"
    },
    {
      "title": "Modern Apartment with City View",
      "description": "Sleek and stylish apartment offering stunning views of the city skyline.",
      "image": "https://images.unsplash.com/photo-1502672023488-70e25813eb80",
      "price": 210,
      "location": "Melbourne",
      "country": "Australia"
    },
    {
      "title": "Traditional Riad",
      "description": "Experience authentic Moroccan hospitality in our beautifully decorated traditional riad.",
      "image": "https://images.unsplash.com/photo-1572867911146-5eb08b591a65",
      "price": 130,
      "location": "Marrakech",
      "country": "Morocco"
    },
    {
      "title": "Lakeside Cabin",
      "description": "Cozy wooden cabin with a private dock on a serene mountain lake.",
      "image": "https://images.unsplash.com/photo-1537197518227-a36efeafd477",
      "price": 170,
      "location": "Lake Tahoe",
      "country": "USA"
    },
    {
      "title": "Tropical Villa with Private Pool",
      "description": "Luxurious villa surrounded by tropical gardens with a private infinity pool.",
      "image": "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf",
      "price": 450,
      "location": "Bali",
      "country": "Indonesia"
    },
    {
      "title": "Historic Castle Suite",
      "description": "Live like royalty in our meticulously restored castle suite with period furnishings.",
      "image": "https://images.unsplash.com/photo-1585544314038-a0d3769d0193",
      "price": 380,
      "location": "County Clare",
      "country": "Ireland"
    },
    {
      "title": "Mountain View Chalet",
      "description": "Modern chalet offering breathtaking views of snow-capped mountains.",
      "image": "https://images.unsplash.com/photo-1502784444187-359ac186c5bb",
      "price": 260,
      "location": "Zermatt",
      "country": "Switzerland"
    },
    {
      "title": "Seaside Villa",
      "description": "Elegant villa perched on a cliff with panoramic views of the Mediterranean.",
      "image": "https://images.unsplash.com/photo-1515263487990-61b07816b324",
      "price": 420,
      "location": "Amalfi Coast",
      "country": "Italy"
    },
    {
      "title": "Urban Boutique Hotel Room",
      "description": "Stylish room in a centrally-located boutique hotel, perfect for city explorers.",
      "image": "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
      "price": 230,
      "location": "Barcelona",
      "country": "Spain"
    },
    {
      "title": "Beachfront Apartment",
      "description": "Modern apartment with direct access to a pristine white sand beach.",
      "image": "https://images.unsplash.com/photo-1574643156929-51fa098b0394",
      "price": 280,
      "location": "Gold Coast",
      "country": "Australia"
    },
    {
      "title": "Rustic Farm Stay",
      "description": "Experience life on a working farm in our comfortable guest house.",
      "image": "https://images.unsplash.com/photo-1500076656116-558758c991c1",
      "price": 95,
      "location": "Vermont",
      "country": "USA"
    },
    {
      "title": "Luxury Tent Camp",
      "description": "Glamping at its finest with luxurious tents and world-class amenities in the wilderness.",
      "image": "https://images.unsplash.com/photo-1533395427426-c5e386e3cf3d",
      "price": 340,
      "location": "Serengeti",
      "country": "Tanzania"
    },
    {
      "title": "Cozy Mountain Lodge",
      "description": "Warm and inviting lodge nestled in the mountains, perfect for nature lovers.",
      "image": "https://images.unsplash.com/photo-1507038772120-7fff76f79d79",
      "price": 185,
      "location": "Banff",
      "country": "Canada"
    },
    {
      "title": "Houseboat on the Canal",
      "description": "Unique stay on a traditional houseboat in the iconic canals of Amsterdam.",
      "image": "https://images.unsplash.com/photo-1544140708-514b7837e6b5",
      "price": 165,
      "location": "Amsterdam",
      "country": "Netherlands"
    }
  ]

  module.exports = {data : sampleListings};