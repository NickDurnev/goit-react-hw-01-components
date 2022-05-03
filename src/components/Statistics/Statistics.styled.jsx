import styled from "styled-components";

export const Stats = styled.section`
    text-align: center;
    max-width: 500px;
    box-shadow: var(--card-shadow);

    & h2 {
        font-size: 30px;
        font-weight: 500;
        text-transform: uppercase;
        color: var(--add-text-color);
    }
`;

export const Statlist = styled.ul`
    display: flex;

    & li {
        width: calc(100%/5);
        padding: 20px;
        min-height: 60px;   
        text-align: center;
        color: var(--light-text-color);
    }
`
export const Label = styled.span`
    display: block;
    margin-bottom: 10px;
`;

export const Percentage = styled.span`
    font-size: 24px;
    font-weight: 500;  
`;