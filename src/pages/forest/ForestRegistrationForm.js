import React from 'react';
import Registration from '../../component/registration';
import { Wrapper } from "../../component/HOC/backgroundWrapper";

const ForestRegistrationForm = () => {
    return <Registration />;
}

export default Wrapper(ForestRegistrationForm, 'forest')