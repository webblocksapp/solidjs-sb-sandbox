import { Component } from 'solid-js';

export interface TodoItemProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const TodoItem: Component<TodoItemProps> = (props) => {
  return <>{JSON.stringify(props)}</>;
};
