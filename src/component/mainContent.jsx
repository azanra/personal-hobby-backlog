export default function MainContent({ title, alias, rating, synopsis }) {
  return (
    <>
      <h1 className="font-bold text-2xl">{title}</h1>
      <span className="text-sm">{alias}</span>
      <p className="text-sm">{rating}</p>
      <div>
        <p className="text-xl">{synopsis}</p>
      </div>
    </>
  );
}
