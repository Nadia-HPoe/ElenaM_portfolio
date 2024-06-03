import React from "react";
import { Icons } from "../Icons";
import "../AboutMe/aboutme.scss";

const education = [
  {
    year: "2005-2010",
    name: "Тверской государственный университет, отделение журналистики филологического факультета",
  },
  {
    year: "2007",
    name: "Тверской государственный университет, дополнительное образование по специальности «референт-переводчик с английского языка»",
  },
];

const courses = [
  {
    year: "2018",
    name: "Курс «Коммерческий автор» от агентства интернет-маркетинга TexTerra",
  },
  {
    year: "2023",
    name: "Томский государственный университет, повышение квалификации по специальности «интернет-маркетолог»",
  },
  {
    year: "2024",
    name: "Курс «Научим редактировать» от агентства контент-маркетинга «Сделаем»",
  },
];

const Education = () => {
  return (
    <div className='education__container'>
      <h2 className='education__title'>Образование и курсы:</h2>
      <hr className='aboutme__title-line' />
      <div className='education__wrapper'>
        <div className='education__list'>
          <p className='education__list-title'>
            <Icons name='circle' color='#aa474c' size='20' />
            Образование
          </p>
          <div className='education__list-wrapper'>
            <div className='education__list-item'>
              {education.map((item) => (
                <>
                  <p className='education__list-item_year'>{item.year}</p>
                  <p className='education__list-item_name'>{item.name}</p>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className='education__list'>
          <p className='education__list-title'>
            <Icons name='circle' color='#aa474c' size='20' />
            Курсы
          </p>
          <div className='education__list-item'>
            {courses.map((item) => (
              <>
                <p className='education__list-item_year'>{item.year}</p>
                <p className='education__list-item_name'>{item.name}</p>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Education };
