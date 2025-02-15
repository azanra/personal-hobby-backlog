export default function ReviewComponent(review) {
  return (
    <div className="pl-25">
      <div>
        <p className="text-2xl mb-2">User : {review.user}</p>
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
