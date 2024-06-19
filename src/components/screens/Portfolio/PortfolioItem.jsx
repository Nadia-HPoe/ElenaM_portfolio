import React from "react";
import { Icons } from "../../Icons";
import "../screens.scss";

const PortfolioItem = (props) => {
  return (
    <div className='portfolio__item'>
      <div className='portfolio__item-title-container'>
        <div className='portfolio__icon'>
          <Icons className='icon' name='circle' color='#aa474c' size='20' />
        </div>

        <p className='portfolio__item-title'>{props.title}</p>
      </div>
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
