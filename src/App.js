// import { computeHeadingLevel } from '@testing-library/react';
import React from 'react';

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: 
      "https://admin.cjrecipe.com:9007/images/theKitchen/PHON/0000001651/0000006094/0000001651.jpg"
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2015/05/22/e1af3baa780984f52bedf67991b49c081.jpg"
  }
];

function Food({name, picture}) {
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} alt={name} />
  </div>;
}

function App() {
  return( 
  <div>
    {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} />))}
  </div> 
    );
}
export default App;
