import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionsHistory } from './TransactionsHistory/TransactionsHistory';

import statistic from '../data/statistic.json';
import user from '../data/user.json';
import friends from '../data/friends.json';

import transactions from '../data/transactions';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statistic} />
      <FriendList friends={friends} />
      <TransactionsHistory items={transactions} />;
    </>
  );
};
