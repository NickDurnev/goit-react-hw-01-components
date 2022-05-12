import PropTypes from 'prop-types';
import * as Styles from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <Styles.Profile>
      <Styles.Description>
        <img src={avatar} alt="User avatar" />
        <Styles.Name>{username}</Styles.Name>
        <Styles.Info>@{tag}</Styles.Info>
        <Styles.Info>{location}</Styles.Info>
      </Styles.Description>

      <Styles.Stats>
        <li>
          <Styles.Label>Followers</Styles.Label>
          <Styles.Quantity>{followers}</Styles.Quantity>
        </li>
        <li>
          <Styles.Label>Views</Styles.Label>
          <Styles.Quantity>{views}</Styles.Quantity>
        </li>
        <li>
          <Styles.Label>Likes</Styles.Label>
          <Styles.Quantity>{likes}</Styles.Quantity>
        </li>
      </Styles.Stats>
    </Styles.Profile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
