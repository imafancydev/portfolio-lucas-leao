import { useState, useEffect } from "react";

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect((): any => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = (): any => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return (): any => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};
