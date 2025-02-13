export default function DetailContent(list) {
  let keyVar, valueVar;
  let arr = [];
  for (let key in list) {
    if (
      key !== "image" &&
      key !== "title" &&
      key !== "alias" &&
      key !== "synopsis"
    ) {
      keyVar = key;
      valueVar = list[key];
      arr.push(`${keyVar} : ${valueVar}`);
    }
  }
  let arrFilter = arr.map((item, index) => {
    return (
      <li key={index}>
        <p>{item}</p>
      </li>
    );
  });
  return (
    <>
      <ul
        style={{
          listStyleType: "none",
        }}
      >
        {arrFilter}
      </ul>
    </>
  );
}
