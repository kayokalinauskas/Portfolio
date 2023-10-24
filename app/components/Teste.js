async function getData() {
  const res = await fetch("https://api.github.com/users/kayokalinauskas/repos");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Teste() {
  const data = await getData();

  // return <div>teste</div>;
  return data.map((a) => {
    return (
      <div>
        <div>{a.name}</div>
        <div>{a.name}</div>
      </div>
    );
  });
  // <div>teste</div>
}
