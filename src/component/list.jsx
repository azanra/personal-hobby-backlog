import Image from "./image";
import MainContent from "./mainContent";
import DetailContent from "./detailContent";

export default function List(list) {
  return (
    <div>
      <div className="flex p-20">
        <Image imageUrl={list.image} />
        <div className="p-5">
          <MainContent
            title={list.title}
            alias={list.alias}
            rating={list.rating}
            synopsis={list.synopsis}
          />
        </div>
      </div>
      <div className="pl-25">
        <DetailContent {...list} />
      </div>
    </div>
  );
}
