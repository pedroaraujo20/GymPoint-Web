import styled from 'styled-components';

export const Form = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 30px;
  width: 100%;
  max-width: ${props => props.maxWidth};

  label {
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #444444;
  }

  input {
    margin-top: 8px;
    margin-bottom: 20px;
    width: 100%;
    height: 45px;
    background: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 4px;
    padding: 13px 15px;
    font-size: 16px;
    line-height: 19px;

    &::placeholder {
      font-size: 16px;
      line-height: 19px;
      color: #999999;
    }
  }

  div {
    display: flex;
    margin-bottom: -10px;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
    }
  }
`;
