import React from "react";
import { forwardRef } from "react";
import { Icons } from "../../Icons";
import "../screens.scss";

const AboutMe = forwardRef((props, ref) => {
  return (
    <section ref={ref} className='aboutme__container'>
      <h2 className='aboutme__title'>
        Какие тексты могу написать или отредактировать:
      </h2>
      <hr className='aboutme__title-line' />
      <ul className='aboutme__list'>
        <li className='aboutme__list-item'>
          <Icons className='icon' name='circle' color='#aa474c' size='18' />
          экспертные SEO-статьи в блог компании;
        </li>
        <li className='aboutme__list-item'>
          <Icons className='icon' name='circle' color='#aa474c' size='18' />
          кейсы,
        </li>
        <li className='aboutme__list-item'>
          <Icons className='icon' name='circle' color='#aa474c' size='18' />
          гайды,
        </li>
        <li className='aboutme__list-item'>
          <Icons className='icon' name='circle' color='#aa474c' size='18' />
          лид-магниты,
        </li>
        <li className='aboutme__list-item'>
          <Icons className='icon' name='circle' color='#aa474c' size='18' />
          тексты для сайта: о компании, в каталог товаров или услуг (с
          SEO-ключами), акции, вопрос-ответ;
        </li>
        <li className='aboutme__list-item'>
          <Icons className='icon' name='circle' color='#aa474c' size='18' />
          тексты для лендинга;
        </li>
        <li className='aboutme__list-item'>
          <Icons className='icon' name='circle' color='#aa474c' size='18' />
          новости компании;
        </li>
        <li className='aboutme__list-item'>
          <Icons className='icon' name='circle' color='#aa474c' size='18' />
          посты для соцсетей (ВК, ТГ);
        </li>
        <li className='aboutme__list-item'>
          <Icons className='icon' name='circle' color='#aa474c' size='18' />
          сторителлинг;
        </li>
        <li className='aboutme__list-item'>
          <Icons className='icon' name='circle' color='#aa474c' size='18' />
          пресс- и пост-релизы;
        </li>
        <li className='aboutme__list-item'>
          <Icons className='icon' name='circle' color='#aa474c' size='18' />
          статьи в СМИ;
        </li>
        <li className='aboutme__list-item'>
          <Icons className='icon' name='circle' color='#aa474c' size='18' />
          тексты для печатной промо-продукции.
        </li>
      </ul>
      <h2 className='aboutme__title'>Что еще я умею:</h2>
      <hr className='aboutme__title-line' />
      <ul className='aboutme__list'>
        <li className='aboutme__list-item'>
          <Icons className='icon' name='circle' color='#aa474c' size='18' />
          брать интервью у экспертов;
        </li>
        <li className='aboutme__list-item'>
          <Icons className='icon' name='circle' color='#aa474c' size='18' />
          подбирать фото к текстам, делать инфографику;
        </li>
        <li className='aboutme__list-item'>
          <Icons className='icon' name='circle' color='#aa474c' size='18' />
          составлять контент-план;
        </li>
        <li className='aboutme__list-item'>
          <Icons className='icon' name='circle' color='#aa474c' size='18' />
          формировать портрет целевой аудитории;
        </li>
        <li className='aboutme__list-item'>
          <Icons className='icon' name='circle' color='#aa474c' size='18' />
          делать конкурентный анализ;
        </li>
        <li className='aboutme__list-item'>
          <Icons className='icon' name='circle' color='#aa474c' size='18' />
          собирать семантическое SEO-ядро сайта;
        </li>
        <li className='aboutme__list-item'>
          <Icons className='icon' name='circle' color='#aa474c' size='18' />
          подбирать ключевые запросы для SEO с помощью сервисов Key Collector,
          Keys.so, Букварикс, Яндекс Вордстат;
        </li>
        <li className='aboutme__list-item'>
          <Icons className='icon' name='circle' color='#aa474c' size='18' />
          отслеживать, как продвигаются тексты в поисковиках, готовить отчеты о
          результатах поискового продвижения;
        </li>
        <li className='aboutme__list-item'>
          <Icons className='icon' name='circle' color='#aa474c' size='18' />
          организовывать работу редакции: готовить ТЗ для авторов и дизайнеров,
          контролировать выполнение задач, редактировать готовые тексты.
        </li>
      </ul>
    </section>
  );
});

export { AboutMe };
