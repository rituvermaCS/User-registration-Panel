import React from 'react';
import "./style.css";

const Card = (props) => {
    const { data } = props;
    return (
        <div className="Card">
            <div className="Card__item">
                <span> First name: </span> <span> {data.first_name} </span>
            </div>
            <div className="Card__item">
                <span> Last name: </span> <span> {data.last_name} </span>
            </div>
            <div className="Card__item">
                <span> email: </span> <span> {data.email} </span>
            </div>
            <div className="Card__item">
                <span> linkedIn Profile: </span> <span> {data.linkedInProfile} </span>
            </div>
            <div className="Card__photo">
                <img src={data.picture} alt={data.first_name} />
            </div>

        </div>
    )
}

export default Card