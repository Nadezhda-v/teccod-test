import { useState, useCallback } from 'react';

import { Service, SelectedService } from '../utils/types';

export const useOrder = () => {
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>(
    [],
  );

  const addService = useCallback((service: Service) => {
    setSelectedServices((prev) => {
      const existingService = prev.find((item) => item.id === service.id);

      if (existingService) {
        return prev.map((item) =>
          item.id === service.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { ...service, quantity: 1 }];
    });
  }, []);

  const removeService = useCallback((id: number) => {
    setSelectedServices((prev) => {
      const existingService = prev.find((item) => item.id === id);

      if (existingService && existingService.quantity > 1) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        );
      }

      return prev.filter((item) => item.id !== id);
    });
  }, []);

  const clearOrder = useCallback(() => {
    setSelectedServices([]);
  }, []);

  const calculateTotal = useCallback(() => {
    return selectedServices.reduce(
      (total, service) => total + service.price * service.quantity,
      0,
    );
  }, [selectedServices]);

  return {
    selectedServices,
    addService,
    removeService,
    clearOrder,
    calculateTotal,
  };
};
