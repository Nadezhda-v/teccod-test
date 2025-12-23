export interface Service {
  id: number;
  name: string;
  price: number;
  description: string;
  category?: string;
}

export interface SelectedService extends Service {
  quantity: number;
}

export type AddServiceHandler = (service: Service) => void;
export type RemoveServiceHandler = (id: number) => void;
