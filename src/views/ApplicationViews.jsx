import { Outlet, Route, Routes } from "react-router-dom"
import { EmployeeList } from "../components/employees/EmployeesList"
import { NavBar } from "../components/nav/NavBar"
import { TicketList } from "../components/tickets/TicketList"
import { Welcome } from "../components/welcome/Welcome"
import { EmployeeDetails } from "../components/employees/EmployeeDetails"
import { CustomerList } from "../components/customers/customersList"
import { CustomerDetails } from "../components/customers/CustomerDetails"
import { useState } from "react"


export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const localHoneyUser = localStorage.getItem("honey_user")
        const honeyUserObject = JSON.parse(localHoneyUser)

        setCurrentUser(honeyUserObject)
    }, [])

    return (
        <Routes>
            <Route 
                path="/"
                element={
                    <>
                        <NavBar />
                        <Outlet />
                    </>
                }
            >
                <Route index element={<Welcome />} />
                <Route path="tickets" element={<TicketList />} />
                <Route path="employees" >
                    <Route index element={<EmployeeList />} />
                    <Route path=":employeeId" element={<EmployeeDetails />} /> {/* /employees/:employeeId */}
                </Route>
                <Route path="customers"  >
                    <Route index element={<CustomerList />} />
                    <Route path=":customerId" element={<CustomerDetails />} /> {/* /customers/:customerId */}
                </Route>
            </Route>
        </Routes>
    )
}
