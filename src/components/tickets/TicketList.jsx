import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketService.jsx"
import "./Tickets.css"
import { Ticket } from "./Ticket.jsx"
import { TicketFilterBar } from "./TicketFilterBar.jsx"

export const TicketList = ({ currentUser }) => {
	const [allTickets, setAllTickets] = useState([])
	const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
	const [filteredTickets, setFilteredTickets] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [showOpenOnly, setShowOpenOnly] = useState(false)

    const getAndSetTickets = () => {
        getAllTickets().then(ticketsArray => {
            if (currentUser.isStaff) {
			    setAllTickets(ticketsArray)
            } else {
                const customerTickets = ticketsArray.filter((ticket) => 
                    ticket.userId === currentUser.id
                )
                setAllTickets(customerTickets)
            }
		})
    }

	useEffect(() => {
        getAndSetTickets()
	}, [currentUser]) // ONLY runs on initial render of component

	useEffect(() => {
		if (showEmergencyOnly) {
			const emergencyTickets = allTickets.filter(
				(ticket) => ticket.emergency
			)
			setFilteredTickets(emergencyTickets)
		} else {
			setFilteredTickets(allTickets)
		}
	}, [showEmergencyOnly, allTickets])

    useEffect(() => {
        const foundTickets = allTickets.filter((ticket) => 
            ticket.description?.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredTickets(foundTickets)
    }, [searchTerm, allTickets])

    useEffect(() => {
        if (showOpenOnly) {
            const openTickets = allTickets.filter((ticket) => ticket.dateCompleted === "")
            setFilteredTickets(openTickets)
        } else {
            setFilteredTickets(allTickets)
        }
    }, [showOpenOnly, allTickets])

	return (
		<div className="tickets-container">
			<h2>Tickets</h2>
            <TicketFilterBar 
                setShowEmergencyOnly={setShowEmergencyOnly}
                setSearchTerm={setSearchTerm}
                setShowOpenOnly={setShowOpenOnly}
                currentUser={currentUser}
            />
			<article className="tickets">
				{filteredTickets.map((ticketObject) => {
					return (
                        <Ticket 
                            ticket={ticketObject} 
                            key={ticketObject.id} 
                            currentUser={currentUser}
                            getAndSetTickets={getAndSetTickets}
                        />
                    )
				})}
			</article>
		</div>
	)
}