import { Component } from 'solid-js';

export const Header: Component<{ logged: boolean }> = (props) => {
  return <>{JSON.stringify(props)}</>;
};
