import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const gifFetch = ({ keyword }) => {
  const [Gif_URL, setGif_Url] = useState("");

  const fetch_Gifs = async () => {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(" ").join("")}&limit=1`);
      const { data } = await response.json();

      setGif_Url(data[0]?.images?.downsized_medium.url);
      
    } catch (error) {
      setGif_Url("https://giphy.com/embed/WyN4Y4GdL4ZdwtVAxX")
      // setGifUrl("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284");
    }
  };


  useEffect(() => {
    if (keyword) fetch_Gifs();
  }, [keyword]);

  return Gif_URL;
};

export default gifFetch;