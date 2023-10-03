import { useState } from "react";
import fetchSynonyms from "../api/fetchSynonyms";

export const useGetSynonyms = () => {
  const [synonyms, setSynonyms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSynonyms = (word) => {
    setIsLoading(true);
    fetchSynonyms(word)
      .then(setSynonyms)
      .then(() => setIsLoading(false));
  };
  return { isLoading, synonyms, getSynonyms };
};
