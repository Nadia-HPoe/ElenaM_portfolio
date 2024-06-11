import React from "react";
import { Icons } from "../Icons";
import "../AboutMe/aboutme.scss";

const PortfolioItem = (props) => {
  return (
    <div className='portfolio__item'>
      <p className='portfolio__item-title'>
        <Icons
          className='portfolio__icon icon'
          name='circle'
          color='#aa474c'
          size='20'
        />
        {props.title}
      </p>
      <div className='portfolio__item-text'>
        <p className='portfolio__item-link'>{props.name}</p>
        <p className='portfolio__item-paragraph'>{props.text}</p>
      </div>
      <a
        href={props.link}
        target='_blank'
        rel='noopener noreferrer'
        className='portfolio__item-button'
      >
        Читать статью
      </a>
    </div>
  );
};

export { PortfolioItem };
