import { useEffect, useState } from "react";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  function handleChange(e: MediaQueryListEvent) {
    setMatches(e.matches);
  }

  useEffect(() => {
    const m = window.matchMedia(query);
    setMatches(m.matches);
    m.addEventListener("change", handleChange);
    return () => {
      m.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}

export function useDarkTheme() {
  return useMediaQuery("(prefers-color-scheme: dark)");
}
