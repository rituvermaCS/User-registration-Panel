import React from 'react';
import { Link } from "react-router-dom";
import { Wrapper } from "../../component/HOC/backgroundWrapper";

const Forest = () => {
    return (
        <div className="Desert">
            <Link to="/forest/register">  Register </Link>
        </div>
    )
};

export default Wrapper(Forest, 'forest');