import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsStars } from "react-icons/bs";

const DailySpecial = () => {
  const [specialRecipe, setSpecialRecipe] = useState({});
  useEffect(() => {
    const fetchSpecificApiData = async () => {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=a66850fc50a240e6a011344745209308&number=1`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const specialRecipeData = await response.json();
      setSpecialRecipe(specialRecipeData.recipes[0]);
    };
    fetchSpecificApiData();
  }, []);
  return (
    <DetailWrapper>
      <header>
        <BsStars /> <span> Daily Special </span>
        <BsStars />
      </header>
      <div>
        <h2>{specialRecipe.title}</h2>
        <img src={specialRecipe.image} alt={specialRecipe.title} />
      </div>
      <Info>
        <div>
          <div>
            <h3
              dangerouslySetInnerHTML={{ __html: specialRecipe.summary }}
            ></h3>
          </div>
          <h3>Ingredients:</h3>
          <ul>
            {specialRecipe.extendedIngredients !== undefined &&
              specialRecipe.extendedIngredients.map((ingredient) => {
                return <li key={ingredient.id}>{ingredient.original}</li>;
              })}
          </ul>
        </div>
      </Info>
    </DetailWrapper>
  );
};
const DetailWrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  header {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  .active {
    background: #00204a;
    color: #fff;
    border-color: #00204a;
  }
  img {
    max-width: 100%;
  }
  h2 {
    margin-bottom: 2rem;
    text-align: center;
    font-style: italic;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    list-style-type: none;
    margin: 4rem 10%;
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
    text-align: center;
  }
`;
const Info = styled.div`
  margin-left: 0rem;
  h3 {
    text-align: center;
  }
`;
export default DailySpecial;
