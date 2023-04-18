import { Component, JSXElement, Show } from 'solid-js';

export const ListItem: Component<{
  children?: JSXElement;
  unchecked?: boolean;
}> = (props) => {
  return (
    <li>
      <Show when={props.unchecked}>Unchecked</Show>
      {props.children}
    </li>
  );
};
