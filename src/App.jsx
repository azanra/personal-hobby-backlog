import "./App.css";
import Anime from "./model/anime";
import Manga from "./model/manga";
import Review from "./model/review";
import List from "./component/list";
import ReviewComponent from "./component/reviewComponent";

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

const firstReview = new Review(
  "Ravid100",
  "10",
  "This anime in my opinion is amazing, I watched the first season and enjoyed everything The action and suspense drama I continued to watch the series and I just enjoyed every moment. I really like watching anime where the hero if time becomes the strongest I started the second season and I just really enjoyed the first episode and the second episode is amazing, I really recommend you watch this anime, it's amazing I really liked seeing the change that the main character makes who is not strong at first and then he shows his true power which is the strongest I really like this anime I think this anime is very special I highly recommend watching the first season and watch the scound seson as well"
);

const secondEntry = new Manga(
  "https://cdn.myanimelist.net/images/manga/1/157897.jpg",
  "Berserk",
  "Berserk: The Prototype",
  "Manga",
  "Unknown",
  "Publishing",
  "Aug 25, 1989 to ?",
  "Action, Adventure, Award Winning, Drama, Fantasy, Horror",
  "Seinen",
  "Young Animal",
  "Miura, Kentarou (Story & Art), Studio Gaga (Art)",
  "Guts, a former mercenary now known as the Black Swordsman, is out for revenge. After a tumultuous childhood, he finally finds someone he respects and believes he can trust, only to have everything fall apart when this person takes away everything important to Guts for the purpose of fulfilling his own desires. Now marked for death, Guts becomes condemned to a fate in which he is relentlessly pursued by demonic beings. Setting out on a dreadful quest riddled with misfortune, Guts, armed with a massive sword and monstrous strength, will let nothing stop him, not even death itself, until he is finally able to take the head of the one who stripped him—and his loved one—of their humanity."
);

const secondReview = new Review(
  "ihavesunktoolow",
  "2",
  "The action scenes also lose their appeal as the series progresses; in fact, they become downright ridiculous. Guts' sword alone is so comically large and heavy that it makes every feat he performs with it seem hilarious. The battles themselves are very rinse and repeat: Guts encounters incredibly OP enemy, Guts gets beaten within an inch of his life and injured so horrifically that it's almost funny he never seems to carry any lasting consequences, and somehow recovers to near perfect health every time. The gore and battles become boring in their predictability. Add to this the fact that some arcs are badly paced and drag painfully at times, and one has the perfect formula for underwhelming."
);

function App() {
  return (
    <>
      <List {...firstEntry} />
      <ReviewComponent {...firstReview} />
      <List {...secondEntry} />
    </>
  );
}

export default App;
