import styled from "styled-components";
import { darken, lighten } from "polished";

export const Container = styled.form`
  h2 {
    font-size: 1.5rem;
    color: var(--text-title);
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    outline-color: var(--text-body);
    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 0;

    font-size: 1rem;
    font-weight: 600;

    background: var(--green);
    color: var(--shape);

    margin-top: 1.5rem;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const ContainerButtonTransaction = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  button[type="button"] {
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    padding: 0 1.5rem;

    background: transparent;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: .2s;
    &:hover{
      border-color: ${darken(0.1,'#d7d7d7')};
    }
    img {
      width: 1.25rem;
      height: 1.25rem;
    }
    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      font-weight: 400;
      color: var(--text-title);
    }
  }
  /* .button-transaction {
    transition: 0.2s;
    &.income:hover {
      background: ${lighten(0.5,'#12a454')};
    }
    &.outcome:hover {
      background: ${lighten(0.3,'#e52e4d')};
    }
  } */
`;