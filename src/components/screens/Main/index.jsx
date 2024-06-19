import React from "react";
import { forwardRef } from "react";
import Image from "../../../assets/images/main_image.jpg";
import "../screens.scss";

const Main = forwardRef((props, ref) => {
  return (
    <section ref={ref} className='container'>
      <div className='main__wrapper'>
        <div className='main__info'>
          <div className='main__image-adaptive'>
            <img
              src={Image}
              className='main__image-item-adaptive'
              alt='myphoto'
            />
          </div>
          <h2 className='main__info-title'>
            Привет! Я Лена Мазурова, <br />
            автор и редактор коммерческих текстов.
          </h2>

          <div className='main__info-aboutme'>
            <p className='main__info-text'>
              А еще я журналист и профессиональный маркетолог — поэтому знаю,
              как сделать текст интересным читателю и одновременно таким, чтобы
              он решал маркетинговые задачи бизнеса. Опыт работы 15 лет. Работаю
              с B2B и B2C-компаниями.
            </p>
            <p className='main__info-text'>
              Всегда проверяю факты и фамилии в тексте. Строго соблюдаю дедлайн.
              Пишу грамотно: мои тексты не нужно отдавать на вычитку корректору.
            </p>
            <p className='main__info-text'>
              Не смогу помочь, если вы блогер или работаете в нише “эзотерика”,
              “беттинг”, “криптовалюта”.
            </p>
          </div>

          <a
            href='https://t.me/lenore_mommy'
            target='_blank'
            rel='noreferrer'
            className='main__info-button'
          >
            Связаться со мной
          </a>
        </div>
        <div className='main__image'>
          <img src={Image} className='main__image-item' alt='myphoto' />
        </div>
      </div>
    </section>
  );
});

export { Main };
