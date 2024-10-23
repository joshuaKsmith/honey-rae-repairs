import "./App.css"
import { CustomerList } from "./components/customers/customersList"
import { TicketList } from "./components/tickets/TicketList"
import { EmployeeList } from "./components/employees/EmployeesList"
import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/nav/NavBar"

export const App = () => {
	return <Routes>
		<Route 
			path="/"
			element={
				<>
					<NavBar />
					<Outlet />
				</>
			}
		>
			<Route path="tickets" element={<TicketList />} />
			<Route path="employees" element={<EmployeeList />} />
			<Route path="customers" element={<CustomerList />} />

		</Route>
	</Routes>
}