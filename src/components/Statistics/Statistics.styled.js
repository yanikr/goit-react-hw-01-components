import styled from 'styled-components';

export const StatisticsSection = styled.section`
  margin-right: auto;
  margin-left: auto;
  background-color: #fff;
  width: 270px;
  margin-bottom: 30px;
`;
export const StatisticsTitle = styled.h2`
  padding-top: 22px;
  padding-bottom: 22px;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  opacity: 70%;
`;
export const StatisticsList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const StatisticsItem = styled.li`
  color: #fff;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const StatisticsLabel = styled.span`
  margin-bottom: 10px;
  font-size: 12px;
`;
