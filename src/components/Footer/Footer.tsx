import React from 'react';

const clickHandler = () => {
  console.log('Load more button is clicked!')
}

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_loadmore">
        <button onClick={clickHandler}>Load more</button>
      </div>
      <p>&copy; {new Date().getFullYear()} This is Footer!</p>
    </div>
  )
}

export default Footer;