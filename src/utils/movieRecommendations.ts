interface Movie {
  id: number;
  title: string;
  imageUrl: string;
  rating: number;
  year: number;
  description: string;
}

const movieDatabase: Record<string, Movie[]> = {
  excited: [
    {
      id: 1,
      title: "Mission: Impossible - Fallout",
      imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
      rating: 8.5,
      year: 2018,
      description: "Ethan Hunt and his IMF team race against time after a mission gone wrong."
    },
    {
      id: 2,
      title: "Mad Max: Fury Road",
      imageUrl: "https://images.unsplash.com/photo-1618022325802-7e5e732d97a1?auto=format&fit=crop&q=80&w=800",
      rating: 8.1,
      year: 2015,
      description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland."
    }
  ],
  happy: [
    {
      id: 3,
      title: "La La Land",
      imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
      rating: 8.0,
      year: 2016,
      description: "A jazz pianist and an aspiring actress fall in love while pursuing their dreams in Los Angeles."
    },
    {
      id: 4,
      title: "The Greatest Showman",
      imageUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800",
      rating: 7.6,
      year: 2017,
      description: "The story of P.T. Barnum's creation of the Barnum & Bailey Circus and the lives of its star attractions."
    }
  ],
  romantic: [
    {
      id: 5,
      title: "Pride and Prejudice",
      imageUrl: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&q=80&w=800",
      rating: 7.8,
      year: 2005,
      description: "Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy."
    },
    {
      id: 6,
      title: "About Time",
      imageUrl: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=800",
      rating: 7.8,
      year: 2013,
      description: "A young man with the ability to time travel tries to change his past in order to improve his future."
    }
  ],
  relaxed: [
    {
      id: 7,
      title: "The Secret Life of Walter Mitty",
      imageUrl: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&q=80&w=800",
      rating: 7.3,
      year: 2013,
      description: "A daydreamer escapes his anonymous life by disappearing into a world of fantasies."
    },
    {
      id: 8,
      title: "Soul",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
      rating: 8.1,
      year: 2020,
      description: "A musician who has lost his passion for music is transported out of his body and must find his way back with the help of an infant soul."
    }
  ],
  sad: [
    {
      id: 9,
      title: "The Pursuit of Happyness",
      imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=800",
      rating: 8.0,
      year: 2006,
      description: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career."
    },
    {
      id: 10,
      title: "Manchester by the Sea",
      imageUrl: "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?auto=format&fit=crop&q=80&w=800",
      rating: 7.8,
      year: 2016,
      description: "A depressed uncle is asked to take care of his teenage nephew after the boy's father dies."
    }
  ],
  angry: [
    {
      id: 11,
      title: "John Wick",
      imageUrl: "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&q=80&w=800",
      rating: 7.4,
      year: 2014,
      description: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him."
    },
    {
      id: 12,
      title: "The Dark Knight",
      imageUrl: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&q=80&w=800",
      rating: 9.0,
      year: 2008,
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    }
  ],
  scared: [
    {
      id: 13,
      title: "Get Out",
      imageUrl: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=800",
      rating: 7.7,
      year: 2017,
      description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point."
    },
    {
      id: 14,
      title: "A Quiet Place",
      imageUrl: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&q=80&w=800",
      rating: 7.5,
      year: 2018,
      description: "In a post-apocalyptic world, a family is forced to live in silence while hiding from creatures that hunt by sound."
    }
  ],
  tired: [
    {
      id: 15,
      title: "Big Fish",
      imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
      rating: 8.0,
      year: 2003,
      description: "A frustrated son tries to determine the fact from fiction in his dying father's life."
    },
    {
      id: 16,
      title: "The Secret Garden",
      imageUrl: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800",
      rating: 7.5,
      year: 1993,
      description: "A young orphan discovers a magical garden hidden at her strict uncle's estate."
    }
  ],
  confused: [
    {
      id: 17,
      title: "Inception",
      imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
      rating: 8.8,
      year: 2010,
      description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
    },
    {
      id: 18,
      title: "Shutter Island",
      imageUrl: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&q=80&w=800",
      rating: 8.2,
      year: 2010,
      description: "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane."
    }
  ],
  energetic: [
    {
      id: 19,
      title: "Baby Driver",
      imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800",
      rating: 7.6,
      year: 2017,
      description: "After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail."
    },
    {
      id: 20,
      title: "Spider-Man: Into the Spider-Verse",
      imageUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=80&w=800",
      rating: 8.4,
      year: 2018,
      description: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities."
    }
  ],
  neutral: [
    {
      id: 21,
      title: "The Grand Budapest Hotel",
      imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
      rating: 8.1,
      year: 2014,
      description: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge."
    },
    {
      id: 22,
      title: "Arrival",
      imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800",
      rating: 7.9,
      year: 2016,
      description: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world."
    }
  ]
};

export function getMovieRecommendations(mood: string): Movie[] {
  return movieDatabase[mood.toLowerCase()] || movieDatabase.neutral;
}