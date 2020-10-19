import React from 'react';
import { TagRow } from './';

export default function MasonryPost({ post, tagsOnTop }) {
  const windowWidth = window.innerWidth;
  const imageBackground = {
    backgroundImage: `url("${require(`../../assets/images/${post.image}`)}")`,
  };
  const style =
    windowWidth > 900 ? { ...imageBackground, ...post.style } : imageBackground;
//if windowWidth is bigger than 900px then imageBackground with this post.style but it is not then imageBackground without post.style
  return (
    <a className="masonry-post overlay" style={style} href={post.link}>
      <div
        className="image-text"
        style={{ justifyContent: tagsOnTop ? 'space-between' : 'flex-end' }}
      >
        <TagRow tags={post.categories} />
        <div
        style={{justifyContent: 'flex-end' }}
      >
        <h2 className="image-title">{post.title}</h2>
        <span className="image-date">{post.date}</span></div>
      </div>
    </a>
  );
}
