import { Component, JSXElement } from 'solid-js';

export const ListItem: Component<{ children?: JSXElement }> = (props) => {
  return <li>{props.children}</li>;
};
