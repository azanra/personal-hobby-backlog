export default function ReviewComponent(review) {
  return (
    <div className="pl-25 border-1 border-indigo-50 border-y-indigo-800 p-20">
      <div>
        <p className="text-2xl mb-2 text-indigo-800 font-bold">{review.user}</p>
      </div>
      <div>
        <p className="text-sm mb-2">Rating : {review.rating}</p>
      </div>
      <div>
        <p className="text-l"> Review : {review.review}</p>
      </div>
    </div>
  );
}
