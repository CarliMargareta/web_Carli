import React from 'react';

const Post = ({ food }) => {
  return (
    <article className="post">
      <header className="post-header">
        <h2 className="post-title">{food.name}</h2>
      </header>
      <div className="post-content">
        <img src={food.image} alt={food.name} className="post-image" />
        <p className="post-description">{food.description}</p>
      </div>
    </article>
  );
};

export default Post;

