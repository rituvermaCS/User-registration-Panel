import React from 'react';
import { Link } from "react-router-dom";
import { Wrapper } from "../../component/HOC/backgroundWrapper";

const Ocean = () => {
    return (
        <div className="Ocean">
            <Link to="/ocean/register">  Register </Link>
        </div>
    )
};

export default Wrapper(Ocean, 'ocean');