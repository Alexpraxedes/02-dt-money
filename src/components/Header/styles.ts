import styled from 'styled-components';

export const Container = styled.header`
    background-color: var( --blue );
`;

export const Content = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 1rem 1rem 7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        color: var(--shape);
        background-color: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;