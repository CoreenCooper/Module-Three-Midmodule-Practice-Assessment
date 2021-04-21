import React from"react";
import studentData from "../data/studentData"
import StudentListItem from "./StudentListItem"
import "./StudentList.css"

const StudentList = ({addStudent}) => {

    const students = studentData.map(student => {
        return <StudentListItem key={student.id} student={student} addStudent={addStudent}/>
    })

    return (
<section className="Students">
    <h2>Build A Class</h2>
    <ul>
        {students}
    </ul>
</section>
    )
}


export default StudentList;