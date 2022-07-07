import Student from "./Student";

const Score = (props) => {
    return ( 
        <>
                {props.scores.map(score =>
        <>
            <h5 className="scores">Score: {score.score}, Date: {score.date}</h5>
        </>    
            )}
        </>
     );
}
 
export default Score;