import useApi from '@/hooks/useApi';
import { ChampionData } from '@/types';

const Champion = () => {
  const { data, loading, error } = useApi<ChampionData>({
    endpoint: 'sleeper/leagues/champion/',
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No data available</div>;

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            {data?.display_name}
          </h2>
          <p className="mt-4 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
            {data?.username}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Champion;
