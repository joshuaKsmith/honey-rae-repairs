import { useEffect, useState } from "react"
import { getStaffUsers } from "../../services/userService"
import { User } from "../users/User"
import "./Employees.css"
import { Link } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getStaffUsers().then(employeeArray => {
            setEmployees(employeeArray)
        }) 
    }, [])

    return (
        <div className="employees">
            {employees.map((employeeObject) => {
                return (
                    <Link to={`/employees/${employeeObject.id}`} key={employeeObject.id}>
                        <User user={employeeObject} />
                    </Link>
                )
            })}
        </div>
    )
}