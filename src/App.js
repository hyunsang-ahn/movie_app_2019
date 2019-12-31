import React from 'react';
import PropTypes from "prop-types"

function Food({fav}){
return <h1>i like {fav}</h1>
}

const foodILike = []

function renderFood(dish){
  return <Food name={dish.name} picture={dish.image} />
}



function App() {
  return (
    <div>
      {foodILike.map(renderFood)}

    </div>
  );
}

export default App;

