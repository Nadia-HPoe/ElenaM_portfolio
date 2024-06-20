import React from "react";
import { forwardRef } from "react";
import "../screens.scss";

const WorkMethod = forwardRef((props, ref) => {
  return (
    <section ref={ref} className='work__container'>
      <h2 className='work__title'>Как проходит работа над текстом:</h2>
      <hr className='aboutme__title-line' />
      <ol className='work__list'>
        <li className='work__list-item'>
          <span className='work__list-item_title'>Обсуждаем задачу</span>
          <br />
          Обычно это происходит в формате созвона. Перед встречей я отправляю
          список вопросов, важных для погружения в тему и понимания вашей
          маркетинговой цели. Мы беседуем с опорой на эти вопросы (заранее
          отвечать на них не нужно). Если созваниваться неудобно — можно вернуть
          мне файл с ответами в письменном виде.
        </li>
        <li className='work__list-item'>
          <span className='work__list-item_title'>
            Заключаем договор подряда
          </span>
          <br />Я работаю только официально, чтобы и у вас, и у меня были
          гарантии того, что работа будет выполнена и оплачена.
        </li>
        <li className='work__list-item'>
          <span className='work__list-item_title'>Готовлю текст</span>
          <br />
          Пишу текст за 3-7 дней, в зависимости от объема.
        </li>
        <li className='work__list-item'>
          <span className='work__list-item_title'>
            Дорабатываем и согласовываем текст
          </span>
          <br />
          Дорабатываю текст по вашим комментариям. В базовую стоимость работ
          входит до двух итераций правок.
        </li>
        <li className='work__list-item'>
          <span className='work__list-item_title'>
            Вы получаете готовый текст
          </span>
          <br />
          Когда текст согласован, вы оплачиваете работу по счету от
          самозанятого. Если нужно, подписываем акт выполненных работ.
        </li>
      </ol>
    </section>
  );
});

export { WorkMethod };
