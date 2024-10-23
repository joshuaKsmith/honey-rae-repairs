import "./App.css"
import { CustomerList } from "./components/customers/customersList"
import { TicketList } from "./components/tickets/TicketList"
import { EmployeeList } from "./components/employees/EmployeesList"
import { Route, Routes } from "react-router-dom"

export const App = () => {
	return <Routes>
		<Route path="/tickets" element={<TicketList />} />
	</Routes>
}