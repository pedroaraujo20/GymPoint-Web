import styled from 'styled-components';
import { darken } from 'polished';

export const Table = styled.table`
  background: #fff;
  border-radius: 4px;
  padding: 30px;
  width: 100%;
  max-width: ${props => props.maxWidth};

  thead th {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #444444;
    padding-left: 150px;
    text-align: left;
    padding-bottom: 20px;

    :first-child {
      padding-left: 0;
    }
  }

  tbody td {
    padding-bottom: 16px;
    padding-left: 150px;
    border-bottom: 1px solid #eeeeee;
    padding-top: 16px;

    :first-child {
      padding-left: 0;
      text-align: left;
    }

    span {
      font-size: 16px;
      line-height: 20px;
      color: #666;
    }

    button {
      padding-left: 23px;
      color: #de3b3b;
      font-size: 15px;
      background: none;
      border: 0;
      line-height: 18px;

      &:hover {
        color: ${darken(0.1, '#de3b3b')};
      }

      :first-child {
        padding-left: 0;
        color: #4d85ee;

        &:hover {
          color: ${darken(0.1, '#4d85ee')};
        }
      }
    }
  }
`;
