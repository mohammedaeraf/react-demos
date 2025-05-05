function Greet() {
  const name: string = "";
  // if name is truthy
  if (name) {
    return <h2>Hello {name}</h2>;
  } else {
    return <h2>Hello, User</h2>;
  }
}

export default Greet;
