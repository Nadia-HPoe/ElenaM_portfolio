import React from "react";
import "./aboutme.scss";

const AboutMe = () => {
  return (
    <div className='aboutme__container'>
      <h2 className='aboutme__title'>
        Какие тексты могу написать или отредактировать:
      </h2>
      <hr className='aboutme__title-line' />
      <ul className='aboutme__list'>
        <li className='aboutme__list-item'>
          экспертные SEO-статьи в блог компании;
        </li>
        <li className='aboutme__list-item'>кейсы,</li>
        <li className='aboutme__list-item'>гайды,</li>
        <li className='aboutme__list-item'>лид-магниты,</li>
        <li className='aboutme__list-item'>
          тексты для сайта: о компании, в каталог товаров или услуг (с
          SEO-ключами), акции, вопрос-ответ;
        </li>
        <li className='aboutme__list-item'>тексты для лендинга;</li>
        <li className='aboutme__list-item'>новости компании;</li>
        <li className='aboutme__list-item'>посты для соцсетей (ВК, ТГ);</li>
        <li className='aboutme__list-item'>сторителлинг;</li>
        <li className='aboutme__list-item'>пресс- и пост-релизы;</li>
        <li className='aboutme__list-item'>статьи в СМИ;</li>
        <li className='aboutme__list-item'>
          тексты для печатной промо-продукции.{" "}
        </li>
      </ul>
      <h2 className='aboutme__title'>Что еще я умею:</h2>
      <hr className='aboutme__title-line' />
      <ul className='aboutme__list'>
        <li className='aboutme__list-item'>брать интервью у экспертов;</li>
        <li className='aboutme__list-item'>
          подбирать фото к текстам, делать инфографику;
        </li>
        <li className='aboutme__list-item'>составлять контент-план;</li>
        <li className='aboutme__list-item'>
          собирать семантическое SEO-ядро сайта;
        </li>
        <li className='aboutme__list-item'>
          подбирать ключевые запросы для SEO с помощью сервисов Key Collector,
          Keys.so, Букварикс, Яндекс Вордстат;
        </li>
        <li className='aboutme__list-item'>
          отслеживать, как продвигаются тексты в поисковиках, готовить отчеты о
          результатах поискового продвижения;
        </li>
        <li className='aboutme__list-item'>
          организовывать работу редакции: готовить ТЗ для авторов и дизайнеров,
          контролировать выполнение задач, редактировать готовые тексты.
        </li>
      </ul>
      <div className='aboutme__paragraph'>
        <p className='aboutme__paragraph-item'>
          Всегда проверяю факты и фамилии в тексте. Строго соблюдаю дедлайн.
          Пишу грамотно: мои тексты не нужно отдавать на вычитку корректору.
        </p>
      </div>
    </div>
  );
};

export { AboutMe };
