// import { Item } from "framer-motion/types/components/Reorder/Item";
import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const SearchedRecipes = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const params = useParams();
  useEffect(() => {
    getSeachedRecipes(params.search); //that is now not "type" like it was in Cuisine
    //but .search - like what we are serching in serach-field
    console.log(params.search);
  }, [params.search]);
  const getSeachedRecipes = async (name) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=34840dacc43f44acbfdff713a64c8847&query=${name}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const cuisineData = await response.json();
    setSearchedRecipes(cuisineData.results);
  };
  return (
    <Grid>
      {searchedRecipes.map((recipe) => {
        return (
          <Card key={recipe.id}>
            <Link to={"/recipe/" + recipe.id}>
              <img src={recipe.image} alt={recipe.title} />
              <h4>{recipe.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
};
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  ${"" /* background-color:pink; */}
`;
const Card = styled.div`
  img {
    width: 100%;
    ${"" /* max-width:5rem; */}
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
export default SearchedRecipes;
