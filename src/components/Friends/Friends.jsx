import {
    FriendsListUl,
    FriendsListItem,
    FriendsListImage,
    FriendsListStatusOnline,
    FriendsListStatusOffline
} from "./Friends.styled";
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => { 
    return <FriendsListUl>
        {friends.map((friend) => (
            <FriendsListItem key={friend.id}>
                {friend.isOnline ? <FriendsListStatusOnline/>: <FriendsListStatusOffline/> }
                <FriendsListImage src={friend.avatar} alt={friend.name} />
                <p>{ friend.name}</p>
            </FriendsListItem>
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