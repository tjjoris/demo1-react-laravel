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
            <DropdownContent open={open}
            >{content}

            </DropdownContent>
        </div>
    )
}

const DropdownContent = ({ children, open }: { children: React.ReactNode, open: boolean }) => {
    return (
        <div className={`dropdown-content ${open ? "content-open" : null}`}>
            {children}
        </div >
    )
}

const DropdownItem = ({ children, onClick }: { children: React.ReactNode, onClick: () => void }) => {
    return (
        <div className='dropdown-item'
            onClick={onClick}>
            {children}
        </div>
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