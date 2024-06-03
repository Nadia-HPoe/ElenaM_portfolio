import React from "react";
import Image from "../assets/images/main_image.jpg";
import "./main.scss";

const Main = () => {
  return (
    <div className='container'>
      <div className='main__wrapper'>
        <div className='main__info'>
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
              Не смогу помочь, если вы блогер или работаете в нише “эзотерика”,
              “беттинг”, “криптовалюта”.
            </p>
          </div>

          <button className='main__info-button'>Связаться со мной</button>
        </div>
        <div className='main__image'>
          <img src={Image} className='main__image-item' alt='myphoto' />
        </div>
      </div>
    </div>
  );
};

export { Main };