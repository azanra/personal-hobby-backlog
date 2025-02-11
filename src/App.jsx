import List from "./component/list";
import "./App.css";
import Anime from "./model/anime";

const firstEntry = new Anime(
  "https://cdn.myanimelist.net/images/anime/1448/147351.jpg",
  "Ore dake Level Up na Ken Season 2: Arise from the Shadow",
  "Solo Leveling Season 2: Arise from the Shadow",
  "TV",
  "13",
  "Currently Airing",
  " Aniplex, Crunchyroll, Sonilude, Netmarble, Kakao piccoma, D&C Media",
  "A-1 Pictures",
  "Web Manga",
  "Action, Adventure, Fantasy",
  "23 min. per ep.",
  "R - 17+ (violence & profanity)",
  "Sung Jin-Woo, dubbed the weakest hunter of all mankind, grows stronger by the day with the supernatural powers he has gained. However, keeping his skills hidden becomes more difficult as dungeon-related incidents pile up around him. When Jin-Woo and a few other low-ranked hunters are the only survivors of a dungeon that turns out to be a bigger challenge than initially expected, he draws attention once again, and hunter guilds take an increased interest in him. Meanwhile, a strange hunter who has been lost for ten years returns with a dire warning about an upcoming catastrophic event. As the calamity looms closer, Jin-Woo must continue leveling up to make sure nothing stops him from reaching his ultimate goal—saving the life of his mother."
);

console.log(firstEntry);

function App() {
  return (
    <>
      <List {...{ ...firstEntry }} />
    </>
  );
}

export default App;
