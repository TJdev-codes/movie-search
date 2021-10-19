import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap');
    * {
    box-sizing: border-box;
    }

    html {
    font-size: 10px;
    }

    body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    }

    p {
    font-size: 1.6rem;
    }

    small {
    font-size: 1.2rem;
    }
`
export default GlobalStyles