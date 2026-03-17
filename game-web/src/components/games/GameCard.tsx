import { Link } from "react-router";

interface GameCardProps {
  id: number;
  title: string;
  genre: string;
  platform: string[];
  rating: number;
  releaseDate: string;
  imageUrl: string;
}

export default function GameCard({
  id,
  title,
  genre,
  platform,
  rating,
  releaseDate,
  imageUrl,
}: GameCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 px-2 py-1 rounded-md bg-black/70 text-white text-xs font-medium">
          ⭐ {rating.toFixed(1)}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-800 dark:text-white/90 mb-2 line-clamp-1">
          {title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
          {genre} • {releaseDate}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {platform.map((p) => (
            <span
              key={p}
              className="px-2 py-0.5 rounded-md bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-medium"
            >
              {p}
            </span>
          ))}
        </div>
        <Link
          to={`/game/${id}`}
          className="inline-flex items-center justify-center w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
