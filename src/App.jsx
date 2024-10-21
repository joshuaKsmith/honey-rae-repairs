import "./App.css"
import { CustomerList } from "./components/customers/customersList"
import { TicketList } from "./components/tickets/TicketList"

export const App = () => {
	return <>
		{/* <TicketList /> */}
		<CustomerList />
	</>
}