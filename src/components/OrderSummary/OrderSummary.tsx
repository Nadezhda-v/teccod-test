import React, { FC } from 'react';

import './OrderSummary.scss';
import { SelectedService } from '../../utils/types';
import { Price } from '../Price';
import { Button } from '../ui';
import { Card } from '../Card';
import { SelectedServiceItem } from '../SelectedServiceItem';
import { OrderSummaryProps } from './OrderSummary.types';

const OrderSummary: FC<OrderSummaryProps> = ({
  selectedServices,
  onRemoveService,
  getTotal,
}) => {
  return (
    <Card elevation='high' className='order-summary'>
      <h2 className='order-summary__title'>Ваш заказ</h2>

      {selectedServices.length < 1 ? (
        <div className='order-summary__empty'>
          <p className='order-summary__empty-text'>Вы еще не выбрали услуги</p>
          <p className='order-summary__empty-hint'>
            Нажмите "Добавить" напротив нужных услуг
          </p>
        </div>
      ) : (
        <>
          <div className='order-summary__items'>
            {selectedServices.map((service: SelectedService) => (
              <SelectedServiceItem
                key={service.id}
                service={service}
                onRemove={onRemoveService}
              />
            ))}
          </div>

          <div className='order-summary__footer'>
            <div className='order-summary__total'>
              <span className='order-summary__total-label'>Итого:</span>
              <Price value={getTotal()} size='large' color='primary' />
            </div>

            <Button
              text='Оформить заказ'
              type='submit'
              className='order-summary__checkout-btn'
            />
          </div>
        </>
      )}
    </Card>
  );
};

export default OrderSummary;
