// Define the props type for the Greet component
interface GreetUserProps {
  name: string; // The name to be greeted
}

// Functional component to display a greeting message
const GreetUser = (props: GreetUserProps) => {
  // Render a heading with a personalized greeting
  return <h2>Hello, {props.name}!</h2>;
};

export default GreetUser;
