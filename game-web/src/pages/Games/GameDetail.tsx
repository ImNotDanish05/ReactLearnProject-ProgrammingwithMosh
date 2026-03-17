import { Link, useParams } from "react-router";
import PageMeta from "../../components/common/PageMeta";

export default function GameDetail() {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <PageMeta
        title={`Game ${id} Details | Game Hub`}
        description="Game details page"
      />
      <div>
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <svg
              className="mr-2 size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Dashboard
          </Link>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white/90 mb-4">
            Game Details
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Game ID: <span className="font-mono text-brand-500">{id}</span>
          </p>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Full game details coming soon...
          </p>
        </div>
      </div>
    </>
  );
}
