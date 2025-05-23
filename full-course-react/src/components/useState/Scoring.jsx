import { useState } from "react";

function Scoring(){
    // score = 0 which is default
    // setScore a function to change it
    // useState start at 0 score
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    return(<>
        <h2>Home: {score1}</h2>
        <button onClick={() => setScore1(score1 + 1)}>1 point for Home</button> 
        <h2>Away: {score2}</h2>
        <button onClick={() => setScore2(score2 + 1)}>1 point for Away</button>
    </>);
}

export default Scoring