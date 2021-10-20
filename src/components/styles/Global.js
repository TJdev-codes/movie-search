import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap');
    * {
    box-sizing: border-box;
    }

    body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #698996;
    }

    p {
    font-size: 2rem;
    }

    small {
    font-size: 1.5rem;
    }

    @media (min-width: 768px) {
        form {
            grid-template-columns: auto 1fr auto;
            grid-gap: 1rem;
            align-items: center;
  }
        input {
            margin-bottom: 0;
  }
}

`
export default GlobalStyles