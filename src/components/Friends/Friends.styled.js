import styled from 'styled-components';

export const FriendsListUl = styled.ul`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-bottom: 30px;
`;

export const FriendsListItem = styled.li`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #fff;
  margin-bottom: 5px;
  border-radius: 4px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const FriendsListStatusOnline = styled.span`
  margin-right: 10px;
  margin-left: 10px;
  background-color: green;
  height: 20px;
  width: 20px;
  border-radius: 50%;
`;
export const FriendsListStatusOffline = styled.span`
  margin-left: 10px;
  margin-right: 10px;
  background-color: red;
  height: 20px;
  width: 20px;
  border-radius: 50%;
`;
export const FriendsListImage = styled.img`
  margin-right: 20px;
  border: 1px solid black;
  border-radius: 4px;
  width: 48px;
  height: 48px;
`;
