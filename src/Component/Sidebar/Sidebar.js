import React from 'react'
import "./SideIndex.css"
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
    const navigate = useNavigate()
    return (
        <div><div id="wrapper">

            <div id="sidebar-wrapper">
                <ul class="sidebar-nav">
                    <li class="sidebar-brand">
                        <a >
                            Admin Dashboard
                        </a>
                    </li>
                    <li>
                        <a onClick={() => { window.location.replace("./Admin") }}>Dashboard</a>
                    </li>
                    <li>
                        <a onClick={() => { window.location.replace("./ApprovalList") }}>UI Approval</a>
                    </li>
                    <li>
                        <a onClick={() => { window.location.replace("./CashApproval") }}>Transcation Approval</a>
                    </li>

                </ul>
            </div>

        </div>
        </div>
    )
}

export default Sidebar