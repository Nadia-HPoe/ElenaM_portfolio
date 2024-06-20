import React from "react";
import "./header.scss";
import { Icons } from "../Icons";

const Header = ({ about, education, portfolio, work, footer }) => {
  return (
    <header className='header__container'>
      <nav class='header__menu'>
        <div className='header__contacts'>
          <a
            className='header__contacts-link'
            href='https://vk.com/paranoid_lenore'
            target='_blank'
            rel='noreferrer'
          >
            <Icons
              className='header__contacts-icon'
              name='vk'
              color='#aa474c'
              size='40'
            />
          </a>
          <a
            className='header__contacts-link'
            href='https://t.me/lenore_mommy'
            target='_blank'
            rel='noreferrer'
          >
            <Icons
              className='header__contacts-icon'
              name='telegram'
              size='40'
            />
          </a>
          <a
            className='header__contacts-link'
            href='mailto: mazurovaes@yandex.ru'
          >
            <Icons
              className='header__contacts-icon'
              name='mail'
              color='#aa474c'
              size='40'
            />
          </a>
        </div>
        <ul class='header__list'>
          <li class='header__list-item'>
            <button
              onClick={() =>
                about.current.scrollIntoView({ behavior: "smooth" })
              }
              class='header__link'
            >
              Что я умею
            </button>
          </li>
          <li class='header__list-item'>
            <button
              onClick={() =>
                education.current.scrollIntoView({ behavior: "smooth" })
              }
              class='header__link'
            >
              Образование
            </button>
          </li>
          <li class='header__list-item'>
            <button
              onClick={() =>
                portfolio.current.scrollIntoView({ behavior: "smooth" })
              }
              class='header__link'
            >
              Портфолио
            </button>
          </li>
          <li class='header__list-item'>
            <button
              onClick={() =>
                work.current.scrollIntoView({ behavior: "smooth" })
              }
              class='header__link'
            >
              Как я работаю
            </button>
          </li>
          <li class='header__list-item'>
            <button
              onClick={() =>
                footer.current.scrollIntoView({ behavior: "smooth" })
              }
              class='header__link'
            >
              Контакты
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
