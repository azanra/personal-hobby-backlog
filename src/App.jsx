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
  "R - 17+ (violence & profanity)"
);

console.log(firstEntry);

function App() {
  return (
    <>
      <List imageUrl={firstEntry.image} />
      <p className="hello-text">Hello World!</p>
    </>
  );
}

export default App;
