import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./Friends/Friends";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from "../user.json";
import data from "../data.json";
import friends from "../friends.json";
import transactions from "../transactions.json";

// import { ProfileContainer } from '../components/Profile/Profile.styled'

export const App = () => {
  return (
    <div>
      <Profile username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
        stats={user.stats} />
      
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friends} />
      
      <TransactionHistory items={transactions} />
    </div>
  );
};


