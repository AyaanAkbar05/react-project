import type { FormEvent } from "react";

interface HeaderProps {
  query: string;
  setQuery: (v: string) => void;
  onSubmit: (e: FormEvent) => void;
}

export default function Header({ query, setQuery, onSubmit }: HeaderProps) {
  return (
    <header
      className="bg-cover bg-center text-center text-white pt-8 pb-24 px-4 "
      style={{ backgroundImage: "url('/images/pattern-bg-desktop.png')" }}
    >
      <h1 className="text-2xl font-medium mb-4">IP Address Tracker</h1>

      <form
        onSubmit={onSubmit}
        className="flex justify-center max-w-lg mx-auto mt-4 mb-3"
      >
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className="w-4/5 p-3 text-lg rounded-l-xl outline-none text-black bg-white"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button className="bg-neutral-900 p-4 rounded-r-xl">
          <img src="/images/icon-arrow.svg" className="w-4 h-4" />
        </button>
      </form>
    </header>
  );
}
