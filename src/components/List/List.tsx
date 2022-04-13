import { Subscriber } from '../../models';
import './List.css';

interface Props {
  subscribers: Subscriber[];
}

export const List = ({ subscribers }: Props) => {
  return (
    <ul>
      {subscribers.map(({ id, nick, avatar, months, description }) => {
        return (
          <li key={id}>
            <img src={avatar} alt={`Avatar for ${nick}`} />
            <h4> {nick} </h4>
            <h4>
              <small>months subscribed: {months}</small>
            </h4>
            <p>{description?.substring(0, 100)}</p>
          </li>
        );
      })}
    </ul>
  );
};
