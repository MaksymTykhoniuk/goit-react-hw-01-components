import PropTypes from 'prop-types';
import {
  TableHead,
  TableRaw,
  Table,
  TableData,
} from './TransactionsHistory.styled';

export const TransactionsHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <TableRaw>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </TableRaw>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableRaw key={id}>
              <TableData firstColumn>{type}</TableData>
              <TableData>{amount}</TableData>
              <TableData>{currency}</TableData>
            </TableRaw>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
