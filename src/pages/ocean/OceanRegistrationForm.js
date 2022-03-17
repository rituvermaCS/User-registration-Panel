import React from 'react';
import Registration from '../../component/registration';
import { Wrapper } from "../../component/HOC/backgroundWrapper";

const OceanRegistrationForm = () => {
    return <Registration />;
}
export default Wrapper(OceanRegistrationForm, 'ocean');