import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import userInfo from '../data/user.json'
import dataStatic from '../data/data.json'
import friendsAr from '../data/friends.json'


export const App = () => {
  return (
    <>
      <Profile
        username={userInfo.username}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
        followers={userInfo.stats.followers}
        views={userInfo.stats.views}
        likes={userInfo.stats.likes}
      />
      <section>
        <Statistics stats={dataStatic} />
      </section>

      <FriendList friends={friendsAr} />
    </>
  );
};


