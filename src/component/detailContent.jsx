export default function DetailContent(list) {
  let keyVar, valueVar;
  let objectList = list.list;
  let arr = [];
  for (let key in objectList) {
    if (
      key !== "image" &&
      key !== "title" &&
      key !== "alias" &&
      key !== "synopsis"
    ) {
      keyVar = key;
      valueVar = objectList[key];
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
      <ul>{arrFilter}</ul>
    </>
  );
}
