import styled from 'styled-components';

export const List = styled.ul`
  width: 300px;

  &.li + li {
    margin-top: 10px;
  }
`;
