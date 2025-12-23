import { RemoveServiceHandler, SelectedService } from '../../utils/types';

export interface OrderSummaryProps {
  selectedServices: SelectedService[];
  onRemoveService: RemoveServiceHandler;
  getTotal: () => number;
}
