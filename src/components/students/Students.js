import React from 'react'
import './Students.css'
function Students(props) {
    const{student, index} = props;
    const studId = "stud-"+index;
    return (
        <div id = {studId} className = "boxes" onMouseOver = {() =>{
                const selectedStudDiv = document.getElementById("selectedStudent");
                selectedStudDiv.innerHTML = 
                `<p class ="selectedTitle">Selected Student</p>
                <p>ID: ${student.id}</p>
                <p>Name: ${student.name}</p>
                <p>Major: ${student.major}</p>
                <button class = "btn">Edit</button>
                <button class = "btn">Delete</button>`
            }}>
        <p className="studentTitle">Student-{index + 1}</p>
        <p>ID: {student.id}</p>
        <p>Name: {student.name}</p>
        <p>Major: {student.major}</p>
        </div>
    )
}


export default Students
