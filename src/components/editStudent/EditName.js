import React from 'react'
import './EditName.css'
function EditName() {
    return (
        <div id = "editStudent">
            <p>Change Name: <input id = "inputTF1" type = "text"/> </p>
            <button onClick = {() =>{
                const newName = document.getElementById("inputTF1").value;
                document.getElementById("stud-0").children[2].innerHTML = `Name: ${newName}`;
            }}>Change</button>
         </div>
    )
}

export default EditName
