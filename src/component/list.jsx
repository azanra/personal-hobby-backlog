import Image from "./image";
import MainContent from "./mainContent";

export default function List({ imageUrl, title, alias, rating, synopsis }) {
  return (
    <>
      <div>
        <Image imageUrl={imageUrl} />
      </div>
      <div>
        <MainContent
          title={title}
          alias={alias}
          rating={rating}
          synopsis={synopsis}
        />
      </div>
    </>
  );
}
