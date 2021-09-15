import React, { PureComponent } from 'react'
import Student from '../../components/student/Student'
import EditName from '../../components/editStudent/EditName'
import StudentContainer from '../selectedStudent/StudentContainer';
import './Dashboard.css'

class Dashboard extends PureComponent {
    render() {
        let message = "";
        return (
            <div id = "dashboard">
                <Student/>
                <StudentContainer/>
                <EditName/>
            </div>
        )
    }
}
export default Dashboard;
