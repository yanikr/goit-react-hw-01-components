import {
    FriendsListItem,
    FriendsListImage,
    FriendsListStatusOnline,
    FriendsListStatusOffline
} from "./Friends.styled";
import PropTypes from 'prop-types';

export const FriendListItemComp = ({ avatar, isOnline, name, id}) => { 
    return <FriendsListItem key={id}>
                {isOnline ? <FriendsListStatusOnline/>: <FriendsListStatusOffline/> }
                <FriendsListImage src={avatar} alt={name} />
                <p>{ name}</p>
            </FriendsListItem>
}

FriendListItemComp.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}