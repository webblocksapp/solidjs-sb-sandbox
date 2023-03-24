import { Component } from 'solid-js';
import { ButtonProps } from './Button';

export interface ButtonGroupProps {
  buttons: Array<Partial<ButtonProps>>;
  orientation: string;
}

export const ButtonGroup: Component<ButtonGroupProps> = (props) => {
  return <>{JSON.stringify(props)}</>;
};
