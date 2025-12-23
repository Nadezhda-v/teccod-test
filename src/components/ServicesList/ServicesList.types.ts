import { AddServiceHandler, Service } from '../../utils/types';

export interface ServicesListProps {
  services: Service[];
  onAddService: AddServiceHandler;
}
