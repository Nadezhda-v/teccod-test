import React, { FC } from 'react';

import Page from '../../components/ui/layout/Page/Page';
import { Preloader } from '../../components/ui';
import { ServicesList } from '../../components/ServicesList';
import { useOrder, useServices } from '../../hooks';
import { OrderSummary } from '../../components/OrderSummary';

export const MainPage: FC = () => {
  const { services, loading } = useServices();
  const { addService, selectedServices, removeService, calculateTotal } =
    useOrder();

  if (loading) <Preloader />;

  return (
    <Page>
      <ServicesList services={services} onAddService={addService} />

      <OrderSummary
        selectedServices={selectedServices}
        onRemoveService={removeService}
        getTotal={calculateTotal}
      />
    </Page>
  );
};
