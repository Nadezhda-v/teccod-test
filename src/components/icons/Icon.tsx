import { FC, ReactNode } from 'react';

interface IconProps {
  children: ReactNode;
  className?: string;
}

const Icon: FC<IconProps> = ({ children, className }) => {
  return (
    <span className={`${className}`} role='img'>
      {children}
    </span>
  );
};

export default Icon;
