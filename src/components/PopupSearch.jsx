import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const PopupSearch = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const mockResults = [
    'Paris',
    'London',
    'New York',
    'Tokyo',
    'Sydney',
  ].filter((item) => item.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="col-xl-4 col-md-auto col-auto">
      <div className="header-wc style2 flex items-center gap-3">
        {/* Search Toggle Button */}
        <button
          className="wc-link2 searchBoxTggler text-lg"
          onClick={() => setOpen(true)}
        >
          <Search/>
        </button>

      

     

        {/* Logo for small screens */}
        <div className="logo d-sm-none">
          <Link to="/">
            <img
              src="/assets/img/logo.svg"
              alt="Carmax"
              className="logo w-8"
            />
          </Link>
        </div>
      </div>

      {/* Search Dialog */}
   <Dialog open={open} onOpenChange={setOpen}>
  <DialogContent
    className="w-[90vw] h-full max-w-none rounded-none border-0 p-6 sm:p-10 bg-black/60 backdrop-blur-md text-white flex flex-col justify-start items-center"
    hideCloseButton
  >
    <DialogHeader className="w-full text-center">
      <h2 className="text-2xl font-bold tracking-wide">Search Destinations</h2>
    </DialogHeader>

    <Input
      type="text"
      placeholder="Type a destination..."
      className="mt-6 w-full max-w-lg text-black"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      autoFocus
    />

    {/* Search Results */}
    {query && (
      <ul className="mt-6 w-full max-w-lg space-y-3 text-base text-white">
        {mockResults.length ? (
          mockResults.map((item, idx) => (
            <li
              key={idx}
              className="px-4 py-2 border border-white/20 rounded-md hover:bg-white/10 transition cursor-pointer"
              onClick={() => {
                console.log('Selected:', item);
                setOpen(false);
              }}
            >
              {item}
            </li>
          ))
        ) : (
          <li className="text-white/50">No results found</li>
        )}
      </ul>
    )}
  </DialogContent>
</Dialog>

    </div>
  );
};

export default PopupSearch;
