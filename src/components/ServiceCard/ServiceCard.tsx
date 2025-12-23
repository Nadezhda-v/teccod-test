import React, { FC } from 'react';

import './ServiceCard.scss';
import { Button } from '../ui';
import { Price } from '../Price';
import { Card } from '../Card';
import { ServiceCardProps } from './ServiceCard.types';

const ServiceCard: FC<ServiceCardProps> = ({ service, onAdd }) => {
  return (
    <Card hoverable elevation='low' className='service-card' padding='small'>
      <div className='service-card__content'>
        <div className='service-card__header'>
          <h3 className='service-card__title'>{service.name}</h3>
        </div>

        <p className='service-card__description'>{service.description}</p>

        <div className='service-card__footer'>
          <Price value={service.price} size='medium' color='primary' />
          <Button
            text='Добавить'
            type='button'
            onClick={() => onAdd(service)}
            className='service-card__add'
          />
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;
