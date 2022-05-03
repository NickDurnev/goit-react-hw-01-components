import PropTypes from "prop-types";
import FriendsListItem from "../FriendListItem";
import { List } from "./FriendList.styled";

const FriendsList = ({friends}) => {
    return (
        <List>
            {friends.map(item => (
                <FriendsListItem
                    key={item.id}
                    avatar={item.avatar}
                    name={item.name}
                    isOnline={item.isOnline}
                />
            ))}
        </List>
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