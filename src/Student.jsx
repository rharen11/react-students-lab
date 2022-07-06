import Score from "./Score";

const Student = (props) => {
    console.log(props.student)
    return ( 
        <>
        <h1>{props.student.name}</h1>
        <h2>{props.student.bio}</h2>
        <Score scores={props.student.scores}/>
        </>
     );
}
 
export default Student;