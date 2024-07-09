function App() {
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "Diana",
    "Evan",
    "Fiona",
    "George",
    "Hannah",
    "Ian",
    "Julia",
  ];
  const randomNum = Math.floor(Math.random() * names.length);
  console.log(randomNum);
  return (
    <>
      <div>
        <h1>Hello {names[randomNum]}</h1>
      </div>
    </>
  );
}

export default App;
