import styled from '@emotion/styled';
import { randomColor } from 'components/utils/randomColor';

export const Title = styled.h2`
  padding: 30px;
  margin: 0px;
  font-size: 36px;
  text-transform: uppercase;
  color: #616161;
  text-align: center;
`;
export const StatsList = styled.ul`
  display: flex;
  padding: 0;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: calc(100% / 5);
  text-align: center;
  background-color: ${randomColor};
`;
export const StatsLabel = styled.span`
  color: white;
`;
export const StatsValue = styled.span`
  color: white;
  font-size: 28px;
`;
export const Section = styled.section`
  width: 400px;
  margin: 20px auto;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.7);
`;
