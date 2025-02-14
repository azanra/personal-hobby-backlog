import Image from "./image";
import MainContent from "./mainContent";
import DetailContent from "./detailContent";

export default function List(list) {
  return (
    <div>
      <div className="flex">
        <Image imageUrl={list.image} />
        <div>
          <MainContent
            title={list.title}
            alias={list.alias}
            rating={list.rating}
            synopsis={list.synopsis}
          />
        </div>
      </div>
      <div>
        <DetailContent {...list} />
      </div>
    </div>
  );
}
