import "./KeyConcept.css";
import logo from '../../assets/key-concepts.png';
import Cardbox from './Cardbox';
function KeyConcept() {

    const content = [
        {
            id: 1,
            content: "Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components",
            name: "Components",
            img: "src/assets/components.png",

        },
        {
            id: 2,
            content: "The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.",
            name: "State",
            img: "src/assets/state.png"
        },
        {
            id: 3,
            content: "Props are arguments passed into React components. Props are passed to components via HTML attributes.",
            name: "Props",
            img: 'src/assets/events.png'
        }
    ]
  return (
    <>
      <header className="header">
            <img src={logo} alt="google logo" />
            <h2>React Key Concepts</h2>
            <p> This is the Basic React keys Concepts that you should know </p>
      </header>

        <div className="container"> 
           
           {content.map((item) =>  (
            <Cardbox key={item.id} name={item.name} content={item.content} img={item.img} />
              ))}
        </div>
    </>
  );
}

export default KeyConcept;
