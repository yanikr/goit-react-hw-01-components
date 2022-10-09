import styled from 'styled-components';

export const ProfileContainer = styled.div`
  height: 330px;
  width: 250px;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;
export const ProfileImage = styled.img`
  padding-top: 30px;
  padding-bottom: 30px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  justify-content: center;
  background-color: #fff;
`;

export const ProfileUsername = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;
export const ProfileDetails = styled.p`
  font-size: 16px;
  opacity: 70%;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const StatsWrapper = styled.div`
  background-color: #f3f6f9;
  border-radius: 0px 0px 4px 4px;
  width: 100%;
  height: 100%;
`;

export const StatsList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ListItem = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid #e4e9f0;
  font-size: 12px;
  font-weight: 600;
  &:not(:last-child) {
    border-right: 1px solid #e4e9f0;
  }
`;
export const ListItemText = styled.span`
  opacity: 70%;
`;

export const ListItemNumber = styled.span``;
