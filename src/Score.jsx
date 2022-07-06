import Student from "./Student";

const Score = (props) => {
    return ( 
        <>
        <div>
            {props.scores.map(score =>
        <>
        <h5>Scores: {score.score}</h5>
        <h5>Dates: {score.date}</h5>
        </>    
        )}
        </div>
        </>
     );
}
 
export default Score;