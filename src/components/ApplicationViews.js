import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { AnimalForm } from "./animal/AnimalForm"
import { EmployeeForm } from "./employee/EmployeeForm"
//import { CustomerForm } from "./customer/CustomerForm"
import { LocationForm } from "./location/LocationForm"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>

                <Route exact path="/locations/create">
                        <LocationForm />
                </Route>
            </LocationProvider>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>

                        <Route exact path="/animals">
                            <AnimalList />
                        </Route>

                        <Route exact path="/animals/create">
                            <AnimalForm />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            <EmployeeProvider>
                <LocationProvider>
                <Route path="/employees">
                    <EmployeeList />
                </Route>

                <Route exact path="/employees/create">
                        <EmployeeForm />
                </Route>
                </LocationProvider>
            </EmployeeProvider>
            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>

                {/* <Route exact path="/customers/create">
                        <CustomerForm />
                </Route> */}
            </CustomerProvider>
        </>
    )
}

