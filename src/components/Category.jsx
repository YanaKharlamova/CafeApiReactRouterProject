import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <List>
      {/* 1 */}
      <StyledLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </StyledLink>
      {/* 2 */}
      <StyledLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </StyledLink>
      {/* 3 */}
      <StyledLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </StyledLink>
      {/* 4 */}
      <StyledLink to={"/cuisine/Chinese"}>
        <GiChopsticks />
        <h4>Chinese</h4>
      </StyledLink>
      {/* NavLink+styles=styledLink */}
      {/* 2 */}
    </List>
  );
};
const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;
const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  aling-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  text-align: center;
  h4 {
    padding-top: 4px;
    color: #fff;
    font-size: 0.95rem;
  }
  svg {
    color: #fff;
    font-size: 2.2rem;
    transform: translateX(19px);
  }
  &.active {
    background: #00204a; //#235784;
    svg {
      color: #f7aa00;
    }
    h4 {
      color: #eef5b2;
    }
  }
`;
export default Category;
