import styled from "styled-components";

const Button = styled.button`
    background-color: rgba(0, 0, 0, 0.75);
    color: #c9c5ba;
    padding: 1rem 2rem;
    margin-bottom: 1.15rem;
    border: 1px solid rgba(0, 0, 0, 0.75);
    border-radius: 20px;
    font-size: 1.5rem;
    cursor: pointer;
    transition: background-color 250ms;

    &:hover {
    background-color: rgba(0, 0, 0, 0.85);
    }
    
`

export default Button