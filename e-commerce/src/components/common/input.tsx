import { ChangeEvent } from 'react';
import './input.css';

export interface IInputProps {
  name: string;
  text: string;
  type: string;
  img: string;
  value: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export function Input(props: IInputProps) {
  const altText = `${props.text} icon`;
  return (
    <section className="group">
      <img className="input-img" src={props.img} alt={altText} />
      <input
        className="input"
        name={props.name}
        type={props.type}
        placeholder={props.text}
        value={props.value}
        onChange={props.handleChange}
      />
      <small className="hide">{props.error}</small>
    </section>
  );
}
