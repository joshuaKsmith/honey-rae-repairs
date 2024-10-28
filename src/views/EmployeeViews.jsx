import { Outlet, Route, Routes } from "react-router-dom"
import { TicketList } from "../components/tickets/TicketList"
import { Welcome } from "../components/welcome/Welcome"
import { EmployeeList } from "../components/employees/EmployeesList"
import { EmployeeDetails } from "../components/employees/EmployeeDetails"
import { CustomerList } from "../components/customers/customersList"
import { CustomerDetails } from "../components/customers/CustomerDetails"
import { EmployeeForm } from "../components/forms/EmployeeForm"
import { EmployeeNav } from "../components/nav/EmployeeNav"

export const EmployeeViews = ({ currentUser }) => {
    return (
        <Routes>
            <Route 
                path="/"
                element={
                    <>
                        <EmployeeNav />
                        <Outlet />
                    </>
                }
            >
                <Route index element={<Welcome />} />
                <Route 
                    path="tickets"
                    element={<TicketList currentUser={currentUser} />}
                />
                <Route path="employees" >
                    <Route index element={<EmployeeList />} />
                    <Route path=":employeeId" element={<EmployeeDetails />} /> {/* /employees/:employeeId */}
                </Route>
                <Route path="customers"  >
                    <Route index element={<CustomerList />} />
                    <Route path=":customerId" element={<CustomerDetails />} /> {/* /customers/:customerId */}
                </Route>
                <Route path="/profile" element={<EmployeeForm currentUser={currentUser}/>} />
            </Route>
        </Routes>
    )
}