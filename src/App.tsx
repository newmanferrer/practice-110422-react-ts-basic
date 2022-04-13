import { useEffect, useState } from 'react';
import { Subscriber } from './models';
import { generateId } from './utilities';
import { List, FormUseFormReduder } from './components';

interface State {
  subscribers: Subscriber[];
}

const initialState: State['subscribers'] = [
  {
    id: '1',
    nick: 'lucy',
    months: 3,
    avatar: 'https://i.pravatar.cc/150?u=1',
    description: 'Lorem ipsu lucy avatar nick etc'
  },
  {
    id: '2',
    nick: 'newman',
    months: 5,
    avatar: 'https://i.pravatar.cc/150?u=2'
  }
];

export const App = () => {
  const [subscribers, setSubscribers] = useState<State['subscribers']>([]);

  useEffect(() => {
    setSubscribers(initialState);
  }, []);

  const handleNewSubscriber = (newSubscriber: Subscriber) => {
    setSubscribers([{ ...newSubscriber, id: generateId() }, ...subscribers]);
  };

  return (
    <>
      <h1>Subscribers</h1>
      <List subscribers={subscribers} />
      {/* <Form handleNewSubscriber={handleNewSubscriber} /> */}
      {/* <FormUseForm handleNewSubscriber={handleNewSubscriber} /> */}
      {/* <FormReduder handleNewSubscriber={handleNewSubscriber} /> */}
      <FormUseFormReduder handleNewSubscriber={handleNewSubscriber} />
    </>
  );
};
