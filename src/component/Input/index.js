import React from 'react';
import { StyledInput, Error } from './input.styled';

export const Input = (props) => {
    const localProps = props.maxLength ? { maxLength: props.maxLength } : null;
    return (
        <>
            <StyledInput
                type={props.type}
                placeholder={props.placeholder}
                onChange={props.onChangeHandler}
                value={props.value}
                required={props.isRequired}
                {...localProps}
            />
            {props.hasError && <Error> {props.errorMessage} </Error>}
        </>
    )
}

Input.defaultProps = {
    type: 'text',
    placeholder: 'Enter here',
    isRequired: false,
}