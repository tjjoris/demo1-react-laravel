import React from "react"
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
//import the css from lukes-dropdown
import "./lukes-dropdown.css";

const Dropdown = ({ buttonText, content }: { buttonText: string, content: React.ReactNode }) => {

    const [open, setOpen] = useState(false);
    const toggleDropDown = () => {
        setOpen((open) => !open);

    }

    return (
        <div className="dropdown">
            <DropdownButton
                toggle={toggleDropDown}
                open={open}>
                {buttonText}
            </DropdownButton>
            <DropdownContent>{content}

            </DropdownContent>
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

const DropdownButton = ({ children, open, toggle }: { children: React.ReactNode, open: boolean, toggle: () => void }) => {
    return (
        <div
            onClick={toggle}
            className={`dropdown-btn ${open ? "button-open" : null}`}>
            {children}
            <span className='toggle-icon'>
                {open ? <FaChevronDown /> :
                    <FaChevronUp />
                }
            </span>
        </div>
    )
}

export { Dropdown, DropdownContent as DropdownContext, DropdownItem };