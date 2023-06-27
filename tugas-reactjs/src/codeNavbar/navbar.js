import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/code-materi'>Code Materi</Link></li>
                <li><Link to='/create'>Create</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;