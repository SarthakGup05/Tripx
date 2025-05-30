import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const SearchWidget = () => {
  return (
    <Card className="search__widget relative bg-white/70 backdrop-blur-md border border-orange-200 shadow-2xl rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-orange-300">
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight text-center sm:text-left">
        Discover Stories Worth Reading
      </h3>

      <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-3 w-full">
        <div className="relative w-full">
        

          {/* Input Field */}
          <Input
            placeholder="Type to search..."
            className="w-full pl-12 pr-4 py-3 text-gray-800 placeholder-gray-400 bg-white rounded-full border border-orange-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300"
          />
        </div>

        {/* Search Button */}
        <Button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 sm:py-0 h-[52px] rounded-full bg-orange-600 hover:bg-orange-700 text-white font-medium transition-all duration-300 shadow-md hover:scale-105"
        >
          Search
        </Button>
      </div>
    </Card>
  );
};

export default SearchWidget;
