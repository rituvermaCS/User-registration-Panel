import React from 'react';
import Registration from '../../component/registration';
import styled from 'styled-components';

const BackgroundWrapper = styled.div`
 background-color: ${props => props.theme[props.name]};
 width: 100wh;
 height: 100vh;
 display:flex;
 justify-content:center;
`;

export const Wrapper = (Component, name) => {
    return (props) => {
        return (
            <BackgroundWrapper name={name}>
                <Component {...props} />
            </BackgroundWrapper>
        );
    };
};