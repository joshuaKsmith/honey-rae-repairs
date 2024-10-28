import { Outlet, Route, Routes } from "react-router-dom"
import { EmployeeList } from "../components/employees/EmployeesList"
import { TicketList } from "../components/tickets/TicketList"
import { Welcome } from "../components/welcome/Welcome"
import { EmployeeDetails } from "../components/employees/EmployeeDetails"
import { CustomerList } from "../components/customers/customersList"
import { CustomerDetails } from "../components/customers/CustomerDetails"
import { EmployeeForm } from "../components/forms/EmployeeForm"
import { useEffect, useState } from "react"
import { EmployeeViews } from "./EmployeeViews"
import { CustomerViews } from "./CustomerViews"


export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const localHoneyUser = localStorage.getItem("honey_user")
        const honeyUserObject = JSON.parse(localHoneyUser)

        setCurrentUser(honeyUserObject)
    }, [])

    return currentUser.isStaff ? <EmployeeViews currentUser={currentUser} /> : <CustomerViews />
}
