import Score from "./Score";

const Student = (props) => {
    console.log(props.student)
    return ( 
        <>
        <h1 id="student-name">{props.student.name}</h1>
        <h5 id="student-bio">{props.student.bio}</h5>
        <Score scores={props.student.scores}/>
        </>
     );
}
 
export default Student;