import { Button } from "../ui/Button";

const SearchBox = () => {
  return (
    <div className="mt-10 rounded-4xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop:blur-2xl">
      <div className="flex flex-col gap-4 lg:flex-row">
        <input
          type="text"
          placeholder="Search by City, neighbourhood or address"
          className="px-5 py-4 w-full h-14 flex-1 rounded-2xl border border-white/10 bg-white/5 text-white placeholder:text-white/80 outline-none transition focus:border-primary/40"
        />
        <Button className="h-14">Search Properties</Button>
      </div>
    </div>
  );
};

export default SearchBox;
