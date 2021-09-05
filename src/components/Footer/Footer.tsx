import React from 'react';
import {apiStates, useApi} from '../../tools';

const clickHandler = (props:any) => {
  console.log('Load more button is clicked!')
}

export const Footer = (props:any) => {
  const updateCurrentPage = props.updateCurrentPage
  return (
    <footer className="footer">
      <div className="footer_loadmore">
        <button onClick={updateCurrentPage}>Load more</button>
      </div>
      <p>&copy; {new Date().getFullYear()} This is Footer!</p>
    </footer>
  )
}

export default Footer;