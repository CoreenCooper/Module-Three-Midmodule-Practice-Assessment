import React from "react";

const StudentListItem = ({student, addStudent}) => {
    const { name, age, bio, image, GPA } = student;
    return (
<li>
    <h3>{name}</h3>
    <p>Age: {age}</p>
    <img src={image} alt="Pic"/>
    <p>Bio: {bio}</p>
    <p>GPA: {GPA.toFixed(2)}</p>
    <button onClick={()=> addStudent(student)}>add To Class</button>
</li>
    )
}

export default StudentListItem;