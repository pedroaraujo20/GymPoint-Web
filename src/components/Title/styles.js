import styled from 'styled-components';
import { darken } from 'polished';

export const Title = styled.header`
  display: flex;
  width: 100%;
  max-width: ${props => props.maxWidth};
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  margin-top: 34px;

  div {
    display: flex;
    width: 100%;
    max-width: 395px;

    input {
      height: 36px;
      max-width: 237px;
      margin-left: 16px;
      background: #ffffff;
      border: 1px solid #dddddd;
      border-radius: 4px;
      font-size: 14px;
      line-height: 16px;
      color: #999999;
    }
  }
`;

export const Button = styled.button`
  background: ${props => props.color};
  height: 36px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  color: #fff;
  border-radius: 4px;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${props => darken(0.1, props.color)};
  }
`;
