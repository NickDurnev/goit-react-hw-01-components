import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  box-shadow: var(--card-shadow);

  & img {
    max-width: 70px;
  }
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props =>
    props.type ? 'rgb(11, 201, 11)' : 'rgb(214, 20, 20)'};
`;

export const Name = styled.p`
  width: 170px;
  font-size: 24px;
  font-weight: 500;
  word-break: break-word;
`;
