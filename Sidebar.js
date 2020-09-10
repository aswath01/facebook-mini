import React from 'react';
import "./Sidebar.css";
import Sidebarrow from "./Sidebarrow";

function Sidebar() {
    return (
        <div className ="sidebar">
            <Sidebarrow title="Home" />
            <Sidebarrow title="About us" />
            <Sidebarrow  title="Privacy"/>
            <Sidebarrow title="Contact us"/>
            <Sidebarrow title ="Copywrite"/>
            </div>
    );
}

export default Sidebar
