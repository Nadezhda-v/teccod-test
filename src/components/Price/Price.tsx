import React, { FC } from 'react';

import { PriceProps } from './Price.types';

const Price: FC<PriceProps> = ({
  value,
  currency = '₽',
  size = 'medium',
  color = 'default',
  showCurrency = true,
}) => {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ru-RU').format(num);
  };

  const sizeClasses = {
    small: 'text-sm',
    medium: 'text-lg',
    large: 'text-2xl',
  };

  const colorClasses = {
    default: 'text-gray-900',
    primary: 'text-primary-600',
    success: 'text-green-600',
  };

  return (
    <div className={`${sizeClasses[size]} ${colorClasses[color]}`}>
      {formatNumber(value)}
      {showCurrency && ` ${currency}`}
    </div>
  );
};

export default Price;
