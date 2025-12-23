export interface PriceProps {
  value: number;
  currency?: string;
  size?: 'small' | 'medium' | 'large';
  color?: 'default' | 'primary' | 'success';
  showCurrency?: boolean;
}
