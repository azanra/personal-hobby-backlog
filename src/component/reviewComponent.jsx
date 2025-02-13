export default function ReviewComponent(review) {
  return (
    <>
      <div>
        <p>{review.user}</p>
      </div>
      <div>
        <p>{review.rating}</p>
      </div>
      <div>
        <p>{review.review}</p>
      </div>
    </>
  );
}
