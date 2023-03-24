import { Component, createSignal, Show } from 'solid-js';

export const LoginForm: Component = () => {
  const [submitted, setSubmitted] = createSignal(false);

  return (
    <>
      <input data-testid="email" />
      <input data-testid="password" />
      <button role="button" onClick={() => setSubmitted(true)}>
        Submit
      </button>
      <Show when={submitted()}>
        Everything is perfect. Your account is ready and we should probably get
        you started!
      </Show>
    </>
  );
};
