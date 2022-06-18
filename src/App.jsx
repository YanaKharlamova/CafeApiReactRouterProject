import React from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import Search from "./components/Search";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import styled from "styled-components";
import { GiForkKnifeSpoon } from "react-icons/gi";

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav>
        <GiForkKnifeSpoon />
        <Logo to={"/"}> The Food Boutique</Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </>
  );
}
const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 62.5%; // 1rem = 10px, 10px/16px = 62.5%
}
* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
  background-color: beige;
  font-family: "Prompt", sans-serif;
  font-weight: 400;
  line-height: 1.6;
  color: #000;
  min-height: 100vh;
  margin:0% 20%;
}
h4{
  font-size::1rem;
  color:rgb(56,56,56);
}
h3{
  font-size::1.5rem;
  color:rgb(56,56,56);
  line-height:2.rem;
  margin:2rem 0rem;
}
a {
  color:rgb(56,56,56);
}
`;
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: Georgia, serif;
`;
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 3rem;
  }
`;
export default App;
