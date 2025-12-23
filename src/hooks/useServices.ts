import { useState, useEffect } from 'react';

import { Service } from '../utils/types';
import { mockServices } from '../components/services/mockServices';

export const useServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getServices = async () => {
      try {
        setLoading(true);
        setServices(mockServices);
      } catch (err) {
        setError('Не удалось загрузить услуги');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getServices();
  }, []);

  return {
    services,
    loading,
    error,
  };
};
