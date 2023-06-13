import { Profile } from 'components/Profile/Profile';
import userInfo from '../data/user.json'

export const App = () => {
  return (
    <div>
      <Profile
        username={userInfo.username}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
        followers={userInfo.stats.followers}
        views={userInfo.stats.views}
        likes={userInfo.stats.likes}
      />
    </div>
  );
};
