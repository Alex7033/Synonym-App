import { useState } from "react";
import { nanoid } from "nanoid";
// import { fetchSynonyms } from "./api/fetchSynonyms";

import "./App.css";
import { useGetSynonyms } from "./hooks/useGetSynonyms";

function App() {
  const [word, setWord] = useState("");
  const { isLoading, synonyms, getSynonyms } = useGetSynonyms();
  // const [loading, setLoading] = useState(false);

  const handleFetchSynonyms = (e) => {
    e.preventDefault();
    getSynonyms(word);

    // setLoading(true);
  };

  const handleSynonymClicked = (newWord) => {
    setWord(newWord);
    getSynonyms(newWord);
  };

  const handleInput = (e) => {
    setWord(e.target.value);
  };

  // useEffect(() => {
  //   fetchSynonyms();
  // }, []);

  return (
    <div>
      <div className="App">
        <form onSubmit={handleFetchSynonyms}>
          {/* {loading == true && <p>Search for a word</p>} */}
          <label htmlFor="text-input">Your word</label>
          <input
            type="text"
            id="text-input"
            onChange={handleInput}
            value={word}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <ul>
              {synonyms.length > 0 === true && (
                <p>There have been {synonyms.length} synonyms found</p>
              )}
              {synonyms.map((synonym) => (
                <li
                  key={nanoid()}
                  onClick={() => {
                    handleSynonymClicked(synonym.word);
                  }}
                >
                  {synonym.word}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
