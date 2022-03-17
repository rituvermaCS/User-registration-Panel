import React from 'react';
import { Link } from "react-router-dom";
import { Wrapper } from "../../component/HOC/backgroundWrapper";

const Desert = () => {
    return (
        <div className="Desert">
            <Link to="/desert/register">  Register </Link>
        </div>
    )
};

export default Wrapper(Desert, 'desert')