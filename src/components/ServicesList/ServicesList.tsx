import React, { FC } from 'react';

import './ServicesList.scss';
import { Service } from '../../utils/types';
import { ServiceCard } from '../ServiceCard';
import { ServicesListProps } from './ServicesList.types';

const ServicesList: FC<ServicesListProps> = ({ services, onAddService }) => {
  return (
    <div className='services-list'>
      <h2 className='services-list__title'>Доступные услуги</h2>
      <div className='services-list__grid'>
        {services.map((service: Service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onAdd={onAddService}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
