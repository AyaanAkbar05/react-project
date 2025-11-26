import { useState, type FormEvent, useEffect } from "react";
import Header from "./components/Header";
import InfoCard from "./components/InfoCard";
import MapView from "./components/MapView";
import type { IPData } from "./types";

const API_KEY = "at_P5CPJkElNruOt7Jvr05St9hQb3z1u";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<IPData | null>(null);

  async function fetchIP(ip: string = "") {
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`;
    const res = await fetch(url);
    const json = await res.json();
    setData(json);
  }

  useEffect(() => {
    fetchIP();
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    fetchIP(query.trim());
  }

  return (
    <div className="bg-neutral-900 min-h-screen text-neutral-900">
      <Header query={query} setQuery={setQuery} onSubmit={handleSubmit} />
      <InfoCard data={data} />
      <MapView data={data} />
    </div>
  );
}

export default App;
