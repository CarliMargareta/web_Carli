import React from 'react';
import ItemListPost from './ItemListPost';

const Content = ({ traditionalFoods }) => {
  return (
    <section className="content">
      {traditionalFoods.map((food) => (
        <ItemListPost key={food.id} food={food} />
      ))}
    </section>
  );
};

export default Content;