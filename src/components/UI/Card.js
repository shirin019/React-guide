import React from 'react';
import './Card.css'

const Card=(props)=>{ //wrappedr component
    const classes = 'card '+props.className;
   return <div className={classes}>{props.children}</div>;
    
}

export default Card;
