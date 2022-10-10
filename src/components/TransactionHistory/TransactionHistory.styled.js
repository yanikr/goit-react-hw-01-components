import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  min-width: 500px;
  border: 1px solid black;
  border-collapse: collapse;
  border-radius: 6px;
  text-align: center;
  font-weight: 400;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;
export const TableHead = styled.thead`
  text-transform: uppercase;
  border: 1px solid #fff;
  background-color: #00bcd5;
  height: 35px;
  color: #fff;
`;
export const TableHeadTr = styled.tr`
  border: 1px solid #fff;
`;
export const TableHeadTh = styled.th`
  font-weight: 500;
  border: 1px solid #fff;
`;
export const TableBody = styled.tbody`
  border: 1px solid #e4e4e4;
`;
export const TableBodyTr = styled.tr`
  opacity: 80%;
  &:hover {
    opacity: 100%;
  }
  border: 1px solid #e4e4e4;
  background-color: #fff;
  &:nth-child(even) {
    background-color: #ecf1f4;
  }
`;
export const TableBodyTh = styled.td`
  cursor: pointer;
  border: 1px solid #e4e4e4;
`;
