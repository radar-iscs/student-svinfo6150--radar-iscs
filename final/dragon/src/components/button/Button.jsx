import {
  BUTTON_TYPE,
  SUBMIT_TYPE,
  BUTTON_VISUAL,
} from '../../data/const';
import './Button.css';

export function Button({
  ariaLabel,
  type = BUTTON_TYPE,
  visual = BUTTON_VISUAL,
  className,
  content,
  onClick,
  form,
}) {
  const PREFIX = 'custom-button';

  return (
    <button
      aria-label={ariaLabel}
      className={`${PREFIX} ${visual} ${className}`}
      onClick={onClick}
      {...(type === SUBMIT_TYPE ? { type: 'submit' } : {})}
      {...(form && { form })}
    >
      {content}
    </button>
  );
}
