import React, { FC } from 'react';

import './SelectedServiceItem.scss';
import { Price } from '../Price';
import { Button } from '../ui';
import Delete from '../icons/Delete';
import { SelectedServiceItemProps } from './SelectedServiceItem.types';

const SelectedServiceItem: FC<SelectedServiceItemProps> = ({
  service,
  onRemove,
}) => {
  return (
    <div className='selected-service-item'>
      <div className='selected-service-item__info'>
        <div className='selected-service-item__header'>
          <h4 className='selected-service-item__title'>{service.name}</h4>
          <span className='selected-service-item__quantity'>
            {service.quantity}
          </span>
        </div>
        <p className='selected-service-item__description'>
          {service.description}
        </p>
      </div>

      <div className='selected-service-item__controls'>
        <div className='selected-service-item__price'>
          <Price
            value={service.price * service.quantity}
            size='small'
            color='primary'
          />

          <span className='selected-service-item__unit-price'>
            <Price
              value={service.price}
              size='small'
              color='primary'
              showCurrency={false}
            />
          </span>
        </div>

        <Button
          type='button'
          className='selected-service-item__remove-btn'
          onClick={() => onRemove(service.id)}
          icon={<Delete />}
        />
      </div>
    </div>
  );
};

export default SelectedServiceItem;
