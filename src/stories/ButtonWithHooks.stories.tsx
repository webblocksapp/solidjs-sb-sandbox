// Button.stories.js|ts|jsx|tsx

import { createSignal } from 'solid-js';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/solid/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'ButtonWithHooks',
  component: Button,
};

/*
 * Example Button story with Solid Hooks.
 * See note below related to this example.
 */
const ButtonWithHooks = () => {
  // Sets the hooks for both the label and primary props
  const [value, setValue] = createSignal('Secondary');
  const [isPrimary, setIsPrimary] = createSignal(false);

  // Sets a click handler to change the label's value
  const handleOnChange = () => {
    if (!isPrimary()) {
      setIsPrimary(true);
      setValue('Primary');
    }
  };
  return (
    <>
      <p>
        This example won't work for SolidJS, despite it has a very similar
        syntax than React, it's not a React hook, so the Solid reactivity engine
        won't work on this context.
      </p>
      <Button primary={isPrimary()} onClick={handleOnChange} label={value()} />
    </>
  );
};

export const Primary = {
  render: () => <ButtonWithHooks />,
};
