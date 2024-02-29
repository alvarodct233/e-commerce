import './button.css';
import { ReactNode } from 'react';

interface IButtonProps {
  children: ReactNode;
  size?: string;
  icon?: boolean;
  handle?: () => void;
}

export function Button(props: IButtonProps) {
  return (
    <button
      onClick={props.handle}
      className="button-pr"
      style={{ fontSize: props.size }}
    >
      {props.children}
    </button>
  );
}
