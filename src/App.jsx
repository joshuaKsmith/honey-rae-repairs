import "./App.css"
import { CustomerList } from "./components/customers/customersList"
import { TicketList } from "./components/tickets/TicketList"
import { EmployeeList } from "./components/employees/EmployeesList"

export const App = () => {
	return <>
		{/* <TicketList /> */}
		<CustomerList />
		<EmployeeList />
	</>
}