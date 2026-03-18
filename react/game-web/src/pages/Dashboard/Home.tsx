import { useState } from "react";
import { useParams } from "react-router";
import GameCard from "../../components/games/GameCard";
import FilterBar from "../../components/games/FilterBar";
import PageMeta from "../../components/common/PageMeta";
import { useSearch } from "../../context/SearchContext";

const sampleGames = [
  // --- 12 GAME AWAL (DIUBAH JADI REAL DATA) ---
  {
    id: 1,
    title: "Cyberpunk 2077",
    genre: "Action RPG",
    platform: ["PC", "PlayStation", "Xbox"],
    rating: 4.8,
    releaseDate: "2020-12-10",
    imageUrl: "https://picsum.photos/seed/game1/400/300",
  },
  {
    id: 2,
    title: "World of Warcraft",
    genre: "MMORPG",
    platform: ["PC"],
    rating: 4.5,
    releaseDate: "2004-11-23",
    imageUrl: "https://picsum.photos/seed/game2/400/300",
  },
  {
    id: 3,
    title: "Forza Horizon 5",
    genre: "Racing",
    platform: ["PC", "Xbox"],
    rating: 4.8,
    releaseDate: "2021-11-09",
    imageUrl: "https://picsum.photos/seed/game3/400/300",
  },
  {
    id: 4,
    title: "Sekiro: Shadows Die Twice",
    genre: "Action",
    platform: ["PC", "PlayStation", "Xbox"],
    rating: 4.8,
    releaseDate: "2019-03-22",
    imageUrl: "https://picsum.photos/seed/game4/400/300",
  },
  {
    id: 5,
    title: "Stardew Valley",
    genre: "Simulation",
    platform: ["PC", "Nintendo Switch", "PlayStation", "Xbox"],
    rating: 4.9,
    releaseDate: "2016-02-26",
    imageUrl: "https://picsum.photos/seed/game5/400/300",
  },
  {
    id: 6,
    title: "Civilization VI",
    genre: "Strategy",
    platform: ["PC", "Nintendo Switch"],
    rating: 4.6,
    releaseDate: "2016-10-21",
    imageUrl: "https://picsum.photos/seed/game6/400/300",
  },
  {
    id: 7,
    title: "Resident Evil Village",
    genre: "Horror",
    platform: ["PC", "PlayStation", "Xbox"],
    rating: 4.7,
    releaseDate: "2021-05-07",
    imageUrl: "https://picsum.photos/seed/game7/400/300",
  },
  {
    id: 8,
    title: "Hollow Knight",
    genre: "Indie",
    platform: ["PC", "Nintendo Switch", "PlayStation", "Xbox"],
    rating: 4.9,
    releaseDate: "2017-02-24",
    imageUrl: "https://picsum.photos/seed/game8/400/300",
  },
  {
    id: 9,
    title: "EA SPORTS FC 24",
    genre: "Sports",
    platform: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    rating: 4.0,
    releaseDate: "2023-09-29",
    imageUrl: "https://picsum.photos/seed/game9/400/300",
  },
  {
    id: 10,
    title: "The Witcher 3: Wild Hunt",
    genre: "RPG",
    platform: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    rating: 4.9,
    releaseDate: "2015-05-19",
    imageUrl: "https://picsum.photos/seed/game10/400/300",
  },
  {
    id: 11,
    title: "Call of Duty: Modern Warfare II",
    genre: "Action",
    platform: ["PC", "PlayStation", "Xbox"],
    rating: 4.2,
    releaseDate: "2022-10-28",
    imageUrl: "https://picsum.photos/seed/game11/400/300",
  },
  {
    id: 12,
    title: "The Legend of Zelda: Breath of the Wild",
    genre: "Adventure",
    platform: ["Nintendo Switch"],
    rating: 4.9,
    releaseDate: "2017-03-03",
    imageUrl: "https://picsum.photos/seed/game12/400/300",
  },

  // --- 7 GAME TAMBAHAN REQUEST DANISH ---
  {
    id: 13,
    title: "Minecraft",
    genre: "Sandbox",
    platform: ["PC", "PlayStation", "Xbox", "Nintendo Switch", "Mobile"],
    rating: 4.9,
    releaseDate: "2011-11-18",
    imageUrl: "https://picsum.photos/seed/game13/400/300",
  },
  {
    id: 14,
    title: "Roblox",
    genre: "Sandbox",
    platform: ["PC", "Xbox", "PlayStation", "Mobile"],
    rating: 4.3,
    releaseDate: "2006-09-01",
    imageUrl: "https://picsum.photos/seed/game14/400/300",
  },
  {
    id: 15,
    title: "Ananta",
    genre: "Adventure",
    platform: ["PC"],
    rating: 4.5,
    releaseDate: "2024-01-01", // Placeholder date, sesuaikan kalau ada rilis aslinya!
    imageUrl: "https://picsum.photos/seed/game15/400/300",
  },
  {
    id: 16,
    title: "Detroit: Become Human",
    genre: "Adventure",
    platform: ["PC", "PlayStation"],
    rating: 4.8,
    releaseDate: "2018-05-25",
    imageUrl: "https://picsum.photos/seed/game16/400/300",
  },
  {
    id: 17,
    title: "Geometry Dash",
    genre: "Indie",
    platform: ["PC", "Mobile"],
    rating: 4.7,
    releaseDate: "2013-08-13",
    imageUrl: "https://picsum.photos/seed/game17/400/300",
  },
  {
    id: 18,
    title: "Grand Theft Auto V",
    genre: "Action",
    platform: ["PC", "PlayStation", "Xbox"],
    rating: 4.8,
    releaseDate: "2013-09-17",
    imageUrl: "https://picsum.photos/seed/game18/400/300",
  },
  {
    id: 19,
    title: "Stumble Guys",
    genre: "Casual",
    platform: ["PC", "Mobile", "PlayStation", "Xbox"],
    rating: 4.1,
    releaseDate: "2020-09-24",
    imageUrl: "https://picsum.photos/seed/game19/400/300",
  }
];

export default function Home() {
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState("relevance");
  const { searchQuery } = useSearch();
  const { genre } = useParams<{ genre: string }>();

  const filteredGames = sampleGames.filter((game) => {
    // Filter by platform
    if (selectedPlatform === "all") return true;
    const platformMap: Record<string, string> = {
      pc: "PC",
      playstation: "PlayStation",
      xbox: "Xbox",
      nintendo: "Nintendo Switch",
    };
    return game.platform.includes(platformMap[selectedPlatform]);
  }).filter((game) => {
    // Filter by genre from URL params
    if (!genre || genre === "all") return true;
    return game.genre.toLowerCase().includes(genre.toLowerCase());
  }).filter((game) => {
    // Filter by search query
    if (!searchQuery) return true;
    return game.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const sortedGames = [...filteredGames].sort((a, b) => {
    switch (selectedOrder) {
      case "date":
        return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
      case "rating":
        return b.rating - a.rating;
      case "name":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  return (
    <>
      <PageMeta
        title="Game Discovery Dashboard | Game Hub"
        description="Discover and explore the latest games across all platforms"
      />
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white/90 mb-6">
          Discover Games
        </h1>

        <FilterBar
          selectedPlatform={selectedPlatform}
          selectedOrder={selectedOrder}
          onPlatformChange={setSelectedPlatform}
          onOrderChange={setSelectedOrder}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {sortedGames.map((game) => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>
      </div>
    </>
  );
}
