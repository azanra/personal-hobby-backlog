import Image from "./image";
import MainContent from "./mainContent";
import DetailContent from "./detailContent";
import Review from "./review";

export default function List(list) {
  return (
    <>
      <div>
        <Image imageUrl={list.image} />
      </div>
      <div>
        <MainContent
          title={list.title}
          alias={list.alias}
          rating={list.rating}
          synopsis={list.synopsis}
        />
      </div>
      <div>
        {console.log("test")}
        <DetailContent {...list} />
      </div>
    </>
  );
}
