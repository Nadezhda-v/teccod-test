import React, { FC } from 'react';
import './Card.scss';

import { CardProps } from './Card.types';

const Card: FC<CardProps> = ({
  children,
  elevation = 'medium',
  padding = 'medium',
  hoverable = false,
  className = '',
  ...props
}) => {
  const cardClasses = [
    'card',
    `card--elevation-${elevation}`,
    `card--padding-${padding}`,
    hoverable ? 'card--hoverable' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

export default Card;
