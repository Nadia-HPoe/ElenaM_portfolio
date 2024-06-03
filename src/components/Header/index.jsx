import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className='header__container'>
      <nav class='header__menu'>
        <ul class='header__list'>
          <li class='header__list-item'>
            <a href='/' class='header__link'>
              Обо мне
            </a>
          </li>
          <li class='header__list-item'>
            <a href='/' class='header__link'>
              Что я умею
            </a>
          </li>
          <li class='header__list-item'>
            <a href='/' class='header__link'>
              Образование
            </a>
          </li>
          <li class='header__list-item'>
            <a href='/' class='header__link'>
              Портфолио
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { Header };
