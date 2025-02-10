import Image from "./image";
import MainContent from "./mainContent";

export default function List({ imageUrl }) {
  return (
    <>
      <div>
        <Image imageUrl={imageUrl} />
      </div>
      <div></div>
    </>
  );
}
