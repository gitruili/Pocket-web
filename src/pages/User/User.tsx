import React from 'react'
import "./User.css"
import { Link } from "react-router-dom"

export default function User() {
    return (
        <>
            <div className='test'>

                User

                <Link to="/"> Go Home </Link>
            </div>
        </>
    )
}
