import styled from 'styled-components';

export const FormWrapper = styled.div`
  background-color:white;
  
  display:flex;
  margin: auto;
  flex-direction: column;
  @media (max-width: 767px) {
      margin: 16px;
    };
    @media (min-width: 768px) {
      justify-content:center;
      max-width: 600px;
      padding:16px;
align-items:center;
      input{
        width:80%;
        
      }
  }
`;