import React from 'react'
import Students from '../students/Students';
import './Student.css';

function Student() {
    const studentList = [
        {
            id: "111",
            name: "Meti",
            major: "CS"
        },
        {
            id: "112",
            name: "Tedros",
            major: "CS"
        },
        {
            id: "113",
            name: "Pascal",
            major: "CS"
        }
    ];
    const processedStudentList = studentList.map((student,index) => <Students student = {student} index = {index}></Students>);
    return (
        <div id = "studentsContainer">
            {processedStudentList}
        </div>
    )
}

export default Student
