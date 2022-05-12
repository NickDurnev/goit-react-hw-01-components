import styled from 'styled-components';

export const Profile = styled.div`
  width: 300px;
  text-align: center;
  box-shadow: var(--card-shadow);
`;

export const Description = styled.div`
  padding: 30px;

  & img {
    margin-left: auto;
    margin-right: auto;
    max-width: 150px;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  & p + p {
    margin-top: 10px;
  }
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

export const Info = styled.p`
  font-size: 18px;
  color: var(--add-text-color);
`;

export const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: solid 1px rgb(214, 209, 209);

  & li {
    width: calc(100% / 3);
    padding: 20px;
  }

  & li + li {
    border-left: solid 1px rgb(214, 209, 209);
  }
`;

export const Label = styled.span`
  display: block;
  color: var(--add-text-color);
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
