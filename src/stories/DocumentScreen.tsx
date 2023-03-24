// YourPage.js|jsx|ts|tsx

import { createSignal, Match, Switch } from 'solid-js';

// Example hook to retrieve data from an external endpoint
function useFetchData() {
  const [status, setStatus] = createSignal('idle');
  const [data, setData] = createSignal<any>([]);

  setStatus('loading');
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res;
    })
    .then((res) => res.json())
    .then((data) => {
      setStatus('success');
      setData(data);
    })
    .catch(() => {
      setStatus('error');
    });

  return {
    status,
    data,
  };
}
export function DocumentScreen() {
  const { status, data } = useFetchData();
  const { user, document, subdocuments } = data();

  return (
    <Switch>
      <Match when={status() === 'loading'}>
        <p>Loading...</p>
      </Match>
      <Match when={status() === 'error'}>
        <p>There was an error fetching the data!</p>
      </Match>
      <Match when={user} keyed>
        <div>{JSON.stringify({ user, document, subdocuments })}</div>
      </Match>
    </Switch>
  );
}
