import styled from "styled-components";

export const Container = styled.div`
    margin-top: 1rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        tr{
            border-radius: 0.5rem;
        }

        th {
            color: var(--text);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            background-color: var(--shape);
            color: var(--text);
            padding: 1rem 2rem;
            border: 0;

            &:first-child {
                color: var(--title);
            }
            
            &.deposit {
                color: var(--green);
            }
            
            &.withdraw {
                color: var(--red);
            }
        }
    }
`;