import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <List>
      <StyledLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </StyledLink>
      <StyledLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </StyledLink>
      <StyledLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </StyledLink>
      <StyledLink to={"/cuisine/Chinese"}>
        <GiChopsticks />
        <h4>Chinese</h4>
      </StyledLink>
      <StyledLink className="special" to={"/dailyspecial"}>
        <AiFillHeart className="special-icon" />
        <h4>Special</h4>
      </StyledLink>
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
    &.special-icon {
      color: #f10606;
    }
  }
  &.active {
    background: #00204a;
    &.special {
      background: #e1dbdb;
      border: 1px solid #d1c9c9;
      h4 {
        color: #000;
      }
    }
    svg {
      color: #f7aa00;
      &.special-icon {
        color: #f10606;
      }
    }
    h4 {
      color: #eef5b2;
    }
  }
`;
export default Category;
