import PropTypes from 'prop-types';
import {
  Avatar,
  Nickname,
  Location,
  Name,
  StatsLable,
  StatsQuantity,
  StatsItem,
  StatsList,
  Description,
  ProfileWrapper,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrapper>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Nickname>@{tag}</Nickname>
        <Location>{location}</Location>
      </Description>

      <StatsList>
        <StatsItem>
          <StatsLable>Followers</StatsLable>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLable>Views</StatsLable>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLable>Likes</StatsLable>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsItem>
      </StatsList>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
