import React from "react";
import "./footer.scss";
import { Icons } from "../Icons";

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='footer__contacts'>
        <a href='https://t.me/lenore_mommy'>
          <Icons name='telegram' color='#aa474c' size='30' />
          @lenore_mommy
        </a>
        <a href='mailto: support@Flowers.com'>
          <Icons name='mail' color='#aa474c' size='30' />
          support@Flowers.com
        </a>
      </div>
      <div class='footer__menu'>
        <ul class='footer__list'>
          <li class='footer__list-item'>
            <a href='/' class='footer__link'>
              Обо мне
            </a>
          </li>
          <li class='footer__list-item'>
            <a href='/' class='footer__link'>
              Что я умею
            </a>
          </li>
          <li class='footer__list-item'>
            <a href='/' class='footer__link'>
              Образование
            </a>
          </li>
          <li class='footer__list-item'>
            <a href='/' class='footer__link'>
              Портфолио
            </a>
          </li>
        </ul>
      </div>
      <div class='footer__copyright'>
        <p class='footer__copyright-paragraph'>
          Copyright © 2024. Designed and developed by{" "}
          <a href='https://github.com/Nadia-HPoe'>Nadezhda Borisova</a>
        </p>
      </div>
    </div>
  );
};

export { Footer };
