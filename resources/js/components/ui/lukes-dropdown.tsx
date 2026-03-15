import React from "react"
import { FaChevronDown } from "react-icons/fa";
//import the css from lukes-dropdown
import "./lukes-dropdown.css";

const Dropdown = ({ buttonText, content }: { buttonText: string, content: React.ReactNode }) => {
    return (
        <div className="dropdown">
            <DropdownButton children={buttonText} />
            <DropdownContent children={content} />
        </div>
    )
}

const DropdownContent = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='dropdown-content'>
            {children}
        </div>
    )
}

const DropdownItem = () => {
    return (
        <div className='nav-link'>
            DropdownItem</div>
    )
}

const DropdownButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='dropdown-btn'>
            {children}
            <span className='toggle-icon'>
                <FaChevronDown />
            </span>
        </div>
    )
}

export { Dropdown, DropdownContent as DropdownContext, DropdownItem };