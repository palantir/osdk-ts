import { useEffect, useState } from "react";

export const useDarkTheme = () => useMediaQuery("(prefers-color-scheme: dark)");

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  const handleChange = (e: MediaQueryListEvent) => setMatches(e.matches);

  useEffect(() => {
    const m = window.matchMedia(query);
    setMatches(m.matches);
    m.addEventListener("change", handleChange);
    return () => {
      m.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
};
