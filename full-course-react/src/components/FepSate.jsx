import { use, useState } from "react";

// functional with props
const FepState = (props) => {
    // useState to change name or nothing change
    const [name, setName] = useState(props.name);
    const [count, setCount] = useState(props.number);

    // handling event arrow function that check if it Salih or change into Unknown
    const message = () => {
        if(name === "Salih"){
            alert('It is you '+ name +'! '+' Click count: '+ count);  
            setCount(count+1);
        }else{
            const newName = "Unknown"; 
            setName(newName);
            if(count >= 5){
                const newName = "Salih";
                setName(newName);
            } 
            alert("I set your name "+ newName +'. Click count: '+ count);
            setCount(count+1);
        }
    }
    // passing the message to my onClick event
    return(<>
        <br />
        <br />
        <p>Name: {name}</p>
        <button onClick={message}>Ikaw ba yan {name}?</button>
    </>);
}
export default FepState