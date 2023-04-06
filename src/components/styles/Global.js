import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@700&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Red Hat Text', sans-serif;
    font-size: 14px;
    font-weight: 700;
    min-height: 100vh;
    text-align: center; 
    background-color: hsl(234, 17%, 12%);
    background-image:  url('./imgs/pattern-hills.svg'), url('./imgs/bg-stars.svg');
    background-repeat: no-repeat, no-repeat;
    background-position: bottom, top;
    background-size: 100%;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    
}

h1 {
   color : white;
   font-size: 1.3rem;
   letter-spacing: .55rem;
   margin-top: 15vh;
   margin-bottom: 10vh;
   
}

@media (max-width: 750px) {
body {
    background-position: bottom right 18%, top;
    background-size: auto;
    }
}

`
export default GlobalStyles