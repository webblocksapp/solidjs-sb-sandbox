import { Component, JSXElement } from 'solid-js';

export interface PageProps {
  footer?: JSXElement;
  children?: JSXElement;
}

export const Page: Component<PageProps> = (props) => {
  return (
    <>
      {JSON.stringify(props)}
      {props.children}
    </>
  );
};
