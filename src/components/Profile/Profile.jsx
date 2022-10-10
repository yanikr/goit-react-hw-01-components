import PropTypes from 'prop-types';
import {
    ProfileContainer,
    DescriptionContainer,
    ProfileImage,
    ProfileUsername,
    ProfileDetails,
    StatsWrapper,
    StatsList,
    ListItem,
    ListItemText,
    ListItemNumber
} from './Profile.styled'


export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => { 
    return <ProfileContainer>
            <DescriptionContainer>
                <ProfileImage src={avatar} alt="User avatar" />
                <ProfileUsername>{username}</ProfileUsername>
                <ProfileDetails>@{tag}</ProfileDetails>
                <ProfileDetails>{ location}</ProfileDetails>
            </DescriptionContainer>
            <StatsWrapper>
                <StatsList>
                    <ListItem>
                        <ListItemText>Followers</ListItemText>
                        <ListItemNumber>{followers }</ListItemNumber>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Views</ListItemText>
                        <ListItemNumber>{ views}</ListItemNumber>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Likes</ListItemText>
                        <ListItemNumber>{ likes}</ListItemNumber>
                    </ListItem>
                </StatsList>
            </StatsWrapper>
    </ProfileContainer>
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
}