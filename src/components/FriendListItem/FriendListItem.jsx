import PropTypes from 'prop-types';
import { Item, Name, Status } from './FriendListItem.styled';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status type={+isOnline}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;
