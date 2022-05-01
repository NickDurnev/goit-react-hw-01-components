import PropTypes from "prop-types";
import FriendsListItem from "../FriendListItem";
import s from "./FriendList.module.css";

const FriendsList = ({friends}) => {
    return (
        <ul className={s.friendList}>
            {friends.map(item => (
                <FriendsListItem
                    key={item.id}
                    avatar={item.avatar}
                    name={item.name}
                    isOnline={item.isOnline}
                />
            ))}
        </ul>
    );
};

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        })
    )
};

export default FriendsList;