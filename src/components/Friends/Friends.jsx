import {
    FriendsListUl
} from "./Friends.styled";
import PropTypes from 'prop-types';
import { FriendListItemComp } from "./FriendListItem";

export const FriendList = ({ friends }) => { 
    return <FriendsListUl>
        {friends.map((friend) => (
            <FriendListItemComp
                key={friend.id}
                avatar={friend.avatar}
                isOnline={friend.isOnline}
                name={ friend.name} />
        ))}
    </FriendsListUl>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
}