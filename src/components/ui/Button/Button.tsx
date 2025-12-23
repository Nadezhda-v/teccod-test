import { FC, ReactNode } from 'react';
import cn from 'classnames';

import './Button.scss';

type ButtonProps = {
  text?: string;
  className?: string | string[];
  type: 'button' | 'submit';
  onClick?: () => void;
  icon?: ReactNode;
};

export const Button: FC<ButtonProps> = ({
  text,
  className,
  type,
  onClick,
  icon,
}) => {
  return (
    <button
      className={cn('button', 'actionButton', className, {
        submitButton: type === 'submit',
      })}
      type={type}
      onClick={onClick}
    >
      {text}
      {icon}
    </button>
  );
};
