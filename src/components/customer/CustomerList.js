import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import { useHistory } from 'react-router-dom'
import "./Customer.css"


// Invoke the useHistory() hook function
//const history = useHistory()

export const CustomerList = () => {
  // This state changes when `getCustomers()` is invoked below
  const { customers, getCustomers } = useContext(CustomerContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("CustomerList: useEffect - getCustomers")
    getCustomers()
  }, [])


  return (
    <section className="customers">
      {console.log("CustomerList: Render", customers)}
      {
        customers.map(customer => {
          return (
            <div className="customer" key= {customer.id} id={`customer--${customer.id}`}>
              <div className="customer__name">
                Name: { customer.name }
              </div>
              <div className="customer__address">
                Address: { customer.address }
              </div>
              {/* <div className="customer__animal">
                Address: { customer.animal.name }
              </div> */}
            </div>
          )
        })
      }
    </section>
  )
}