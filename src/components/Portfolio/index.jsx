import React from "react";
import { Icons } from "../Icons";
import "../AboutMe/aboutme.scss";

const Portfolio = () => {
  return (
    <div className='portfolio__container'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <hr className='aboutme__title-line' />
      <div className='portfolio__wrapper'>
        <div className='portfolio__item'>
          <div className='portfolio__item-left'>
            <p className='portfolio__item-title'>
              <Icons
                className='portfolio__icon icon'
                name='circle'
                color='#aa474c'
                size='20'
              />
              SEO-статья
            </p>
            <p className='portfolio__item-link'>
              Надо ли согласовывать остекление балкона после 1 марта 2022 года?
            </p>
            <p className='portfolio__item-paragraph'>
              Текст уже 2 года находится в топ-3 поисковой выдачи, имеет 76
              тысяч просмотров и привлекает органический трафик на сайт
              отраслевого портала «ОКНА МЕДИА»
            </p>
            <button className='portfolio__item-button'>Читать статью</button>
          </div>
          {/* <div className='portfolio__item-right'>
            <div className='portfolio__item'>
              <p className='portfolio__item-title'>
                <Icons
                  className='portfolio__icon icon'
                  name='circle'
                  color='#aa474c'
                  size='20'
                />
                Экспертная SEO-статья
              </p>
              <p className='portfolio__item-link'>
                Единый налоговый платеж с 2023 года: разбираем спорные вопросы
              </p>
              <p className='portfolio__item-paragraph'>
                Статья в блог для международной аудиторской компании в сложной
                B2B-нише. Приводит на сайт узкую целевую аудиторию, которую
                можно конвертировать в лиды с помощью формы заявки на сайте.
              </p>
              <button className='portfolio__item-button'>Читать статью</button>
            </div>
          </div> */}
          <div className='portfolio__item-left'>
            <p className='portfolio__item-title'>
              <Icons
                className='portfolio__icon icon'
                name='circle'
                color='#aa474c'
                size='20'
              />
              SEO-статья в нише «Маркетинг»
            </p>
            <p className='portfolio__item-link'>
              Маркетинговая стратегия для b2b-компании: готовое решение, которое
              помогает поднять продажи
            </p>
            <p className='portfolio__item-paragraph'>
              ТВ тексте рассказала о стратегии маркетингового агентства в сфере
              b2b. Статья попала в топ поисковой выдачи по запросу
              «Маркетинговая стратегия b2b»
            </p>
            <button className='portfolio__item-button'>Читать статью</button>
          </div>
        </div>
        <div className='portfolio__switcher'>
          <Icons name='arrow' color='#aa474c' size='50' />
        </div>
      </div>
    </div>
  );
};

export { Portfolio };
