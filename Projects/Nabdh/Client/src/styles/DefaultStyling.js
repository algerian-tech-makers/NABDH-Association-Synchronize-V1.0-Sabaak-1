import { createGlobalStyle } from "styled-components";

const DefaultStyling = createGlobalStyle`
  :root{
    --primary-color: white;
    --secondary-color:#44821a;
    --third-color:#b2c565;
    --primary-bgc: white;
    --secondary-bgc: #F0F2F5
  }
  *{
    box-sizing: border-box;
    text-decoration: none;
    position: relative;
    color: inherit;
  }
  html,body{
    width: 100%;
    height: 100%;
    background-color: var(--primary-bgc);
  }
  button{
    padding: 10px 15px;
	  border: none;
	  border-radius: 5px;
    cursor:pointer ;
  }
  input{
    width: 100%;
		background-color: transparent;
		border: 1px solid;
		outline: none;
		border-radius: 5px;
		padding: 0 15px;
  }
  input,label,p,a{
    font-family: "lateef","cursive" ;
    font-size: 1.4rem;
  }
  h1,h2,h3,h4,h5,h6{
    font-family: "Ruqaa","cursive" ;
  }
  .display-f{
      display: flex;
  }
  .flex-r{
      flex-direction: row;
  }
  .flex-c{
      flex-direction: column;
  }`;

export default DefaultStyling;
