import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';
import './Button.css';

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

const SomeText = styled('div')`
  color: ${(props) => props?.theme?.colors.primary};
`;

export const Button: Component<ButtonProps> = (props) => {
  return (
    <button
      type="button"
      classList={{
        'btn-small': props.size === 'small',
        'btn-medium': props.size === 'medium',
        'btn-large': props.size === 'large',
        btn: true,
        'btn-primary': props.primary === true,
        'btn-secondary': props.primary === false,
      }}
      style={{ 'background-color': props.backgroundColor }}
    >
      <SomeText>{props.label}</SomeText>
    </button>
  );
};
