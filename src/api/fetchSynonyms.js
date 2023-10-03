const BASE_URL = `https://api.datamuse.com`;

export const fetchSynonyms = async (word) => {
  const response = await fetch(`${BASE_URL}/words?rel_syn=${word}`);
  const result = await response.json();

  return result;
  //   setSynonyms(result);
  //   setToggle(true);
};

export default fetchSynonyms;
