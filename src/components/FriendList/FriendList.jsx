import { FriendListItem } from 'components/FriendListItem/FriendListItem'
import { PropTypes } from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
      <ul className={css.friendlist}>
        {friends.map(({ id, avatar, name, isOnline}) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          ></FriendListItem>
        ))}
      </ul>
    );
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};



