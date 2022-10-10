import {
    TransactionHistoryTable,
    TableHead,
    TableHeadTr,
    TableHeadTh,
    TableBody,
    TableBodyTr,
    TableBodyTh
} from "./TransactionHistory.styled";
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => { 
    return <TransactionHistoryTable>
        <TableHead>
            <TableHeadTr>
                <TableHeadTh>Type</TableHeadTh>
                <TableHeadTh>Amount</TableHeadTh>
                <TableHeadTh>Currency</TableHeadTh>
            </TableHeadTr>
        </TableHead>
        <TableBody>
            {items.map((item) => ( 
                <TableBodyTr key={item.id}>
                    <TableBodyTh>{capitalizeFirstLowercaseRest(item.type)}</TableBodyTh>
                    <TableBodyTh>{item.amount}</TableBodyTh>
                    <TableBodyTh>{item.currency}</TableBodyTh>
                </TableBodyTr> 
            ))}
        </TableBody>
    </TransactionHistoryTable>
}

const capitalizeFirstLowercaseRest = str => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}