type GreetProps = {
  name: string;
};

const Greet = (props: GreetProps) => {
  return <h2>Hello, {props.name}!</h2>;
};

export default Greet;
