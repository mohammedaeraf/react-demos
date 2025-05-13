// Purpose - to Greet the user
interface GreetUserProps {
  name: string;
  message: string;
}

const GreetUser = (props: GreetUserProps) => {
  return (
    <div className="border border-primary m-3 p-3">
      <h1>Hello, {props.name}</h1>
      <p> {props.message}</p>
    </div>
  );
};
export default GreetUser;
