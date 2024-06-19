import React from "react";
import { forwardRef } from "react";
import "../screens.scss";

const WorkMethod = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='work__container'>
      <h2 className='work__title'>Как я работаю</h2>
      <hr className='work__title-line' />
      <div className='work__wrapper'></div>
    </div>
  );
});

export { WorkMethod };
