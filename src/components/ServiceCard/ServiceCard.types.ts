import { AddServiceHandler, Service } from '../../utils/types';

export interface ServiceCardProps {
  service: Service;
  onAdd: AddServiceHandler;
  addedCount?: number;
}
