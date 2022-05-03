import styled from "styled-components";

export const Table = styled.table`
    width: 450px;
    box-shadow: var(--card-shadow);
    border-spacing: 0;

    & th {
        width: calc(100%/3);
        padding: 10px;  
        text-align: center;
        font-size: 14px;
        text-transform: uppercase;
        color: var(--light-text-color);
        background-color: rgb(70, 118, 221);
    }

    & th+th {
        border-left: solid 1px var(--light-text-color);
    }

    & td {
        width: calc(100%/3);
        padding: 10px;
        text-align: center;
        color: var(--add-text-color);
        word-break: break-word;
    }

    & td+td {
        border-left: solid 1px rgb(195, 208, 224);
    }

    & tr:nth-child(even) {
        background-color: rgb(232, 238, 243);
    }
`;