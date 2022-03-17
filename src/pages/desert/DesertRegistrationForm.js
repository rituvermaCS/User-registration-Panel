import React from 'react';
import Registration from '../../component/registration';
import { Wrapper } from "../../component/HOC/backgroundWrapper";

const DesertRegistrationForm = () => {
    return <Registration />;
}

export default Wrapper(DesertRegistrationForm, 'desert');