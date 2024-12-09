import { useState } from 'react';
import Button from '../button';
import './AccordionItem.css';

export function AccordionItem({ title, text, image }) {
  const PREFIX = 'accordion-item';

  const [isOpen, setIsOpen] = useState(false);
  
  const onClickAccordionTitle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={PREFIX}>
      <Button
        className={`${PREFIX}__title`}
        onClick={onClickAccordionTitle}
        content={
          <>
            <span>{title}</span>
            <span className={`${PREFIX}__icon`}>
              {isOpen ? '∧' : '∨'}
            </span>
          </>
        }
      />
      {isOpen && <div className={`${PREFIX}__content`}>
        <div className={`${PREFIX}__text`}>{text}</div>
        <img src={image} />
      </div>}
    </div>
  );
}
