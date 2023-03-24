import { Component, JSXElement } from 'solid-js';

export const List: Component<{ children?: JSXElement }> = (props) => {
  return <ul>{props.children}</ul>;
};
