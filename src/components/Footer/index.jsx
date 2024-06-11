import React from "react";
import { forwardRef } from "react";
import "./footer.scss";
import { Icons } from "../Icons";

const Footer = forwardRef(
  ({ main, about, education, portfolio, props }, ref) => {
    return (
      <footer ref={ref} className='footer__container'>
        <div className='footer__contacts'>
          <a
            className='footer__contacts-link link'
            href='https://vk.com/paranoid_lenore'
            target='_blank'
            rel='noreferrer'
          >
            <Icons
              className='footer__contacts-icon'
              name='vk'
              color='#aa474c'
              size='30'
            />
            vkontakte
          </a>
          <a
            className='footer__contacts-link'
            href='https://t.me/lenore_mommy'
            target='_blank'
            rel='noreferrer'
          >
            <Icons
              className='footer__contacts-icon'
              name='telegram'
              color='#aa474c'
              size='30'
            />
            telegram
          </a>
          <a
            className='footer__contacts-link'
            href='mailto: mazurovaes@yandex.ru'
          >
            <Icons
              className='footer__contacts-icon'
              name='mail'
              color='#aa474c'
              size='30'
            />
            mazurovaes@yandex.ru
          </a>
        </div>
        <div class='footer__menu'>
          <ul class='footer__list'>
            <li class='footer__list-item'>
              <button
                onClick={() =>
                  main.current.scrollIntoView({ behavior: "smooth" })
                }
                class='footer__link'
              >
                Обо мне
              </button>
            </li>
            <li class='footer__list-item'>
              <button
                onClick={() =>
                  about.current.scrollIntoView({ behavior: "smooth" })
                }
                class='footer__link'
              >
                Что я умею
              </button>
            </li>
            <li class='footer__list-item'>
              <button
                onClick={() =>
                  education.current.scrollIntoView({ behavior: "smooth" })
                }
                class='footer__link'
              >
                Образование
              </button>
            </li>
            <li class='footer__list-item'>
              <button
                onClick={() =>
                  portfolio.current.scrollIntoView({ behavior: "smooth" })
                }
                class='footer__link'
              >
                Портфолио
              </button>
            </li>
          </ul>
        </div>
        <div class='footer__copyright'>
          <p class='footer__copyright-paragraph'>
            Copyright © 2024. Designed and developed by{" "}
            <a
              class='footer__copyright-link'
              href='https://github.com/Nadia-HPoe'
              target='_blank'
              rel='noreferrer'
            >
              Nadia Borisova
            </a>
          </p>
          <p class='footer__copyright-paragraph'>
            <a
              class='footer__copyright-link'
              href='https://www.flaticon.com/free-icons/agenda'
              title='agenda icons'
              target='_blank'
              rel='noreferrer'
            >
              Agenda icons created by Freepik - Flaticon
            </a>
          </p>
        </div>
      </footer>
    );
  }
);

export { Footer };
