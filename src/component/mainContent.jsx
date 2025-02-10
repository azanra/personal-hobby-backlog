export default function MainContent({ title, alias, rating, synopsis }) {
  return (
    <>
      <h1>{title}</h1>
      <span>{alias}</span>
      <p>{rating}</p>
      <div>
        <p>{synopsis}</p>
      </div>
    </>
  );
}
