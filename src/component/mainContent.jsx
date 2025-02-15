export default function MainContent({ title, alias, rating, synopsis }) {
  return (
    <>
      <h1 className="font-bold text-2xl mb-4 border-1 border-indigo-50 border-y-indigo-800 p-5">
        {title}
      </h1>
      <span className="text-sm">{alias}</span>
      <p className="text-sm mb-8">{rating}</p>
      <div>
        <p className="text-lg">{synopsis}</p>
      </div>
    </>
  );
}
