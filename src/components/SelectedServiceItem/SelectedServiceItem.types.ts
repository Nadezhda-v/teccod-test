import { SelectedService } from '../../utils/types';

export interface SelectedServiceItemProps {
  service: SelectedService;
  onRemove: (id: number) => void;
}
