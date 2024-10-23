import { useEffect, useState } from "react"
import { getNonStaffUsers } from "../../services/userService"
import "./Customers.css"
import { User } from "../users/User"
import { Link } from "react-router-dom"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getNonStaffUsers().then(customerArray => {
            setCustomers(customerArray)
        })
    }, [])

    return (
        <div className="customers">
            {customers.map((customerObject) => {
                return (
                    <Link to={`/customers/${customerObject.id}`}>
                        <User user={customerObject} />
                    </Link>
                )
            })}
        </div>
    )
}