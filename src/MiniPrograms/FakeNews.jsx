import { useState } from "react";

export const FakeNews = () => {
  const [title, setTitle] = useState("");
  const [source, setSource] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = () => {
    if (
      source.includes("Facebook".toLowerCase()) ||
      source.includes("Whatsapp".toLowerCase())
    ) {
      setErrors("This News Is Fake");
    } else {
      setErrors("Thanks for the news");
    }
  };

  return (
    <div>
      <h1>Detect Fake News</h1>
      <form>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title Here"
          value={title}
        ></input>
        <input
          type="text"
          onChange={(e) => setSource(e.target.value.toLowerCase())}
          placeholder="Enter News Source"
          value={source}
        ></input>

        <button type="button" onClick={handleSubmit}>
          Check Wether It's Fake Or Not
        </button>
      </form>

      <p>{errors}</p>
    </div>
  );
};
