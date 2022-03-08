import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    font-size: 1rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      &:first-child {
        width: 40%;
      }
    }
    td {
      padding: 1rem 2rem;
      background: var(--shape);
      border: 0;
      color: var(--text-body);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
      }
      &.deposit {
        color: var(--green);
      }
      &.withdraw {
        color: var(--red);
      }
    }
    /* tr {
      display: flex;
      justify-content: space-between;
      padding: 1.2rem 2rem;
      margin: 0.5rem 0;
      border-radius: 0.25rem;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    } */
  }
`;
