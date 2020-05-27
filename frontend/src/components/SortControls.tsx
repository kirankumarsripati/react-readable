import React from 'react'
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setSortOrder } from '../actions/sortOrder'

const sortings = [
  {
    field: 'timestamp',
    title: 'By Date'
  },
  {
    field: 'voteScore',
    title: 'By Score'
  }
];

interface SortControls {
  sortOrder: string;
  dispatch: Function;
}

const SortControls: React.FC<SortControls> = ({ sortOrder, dispatch }) => {
  const onChangeSorting = (order: string) => {
    if (sortOrder.indexOf(order) >= 0) {
      if (sortOrder && sortOrder[0] === '-') {
        order = '';
      } else {
        order = `-${order}`;
      }
    }

    dispatch(setSortOrder(order));
  }

  return (
    <Button.Group basic>
      {sortings.map(i => {
        const up = sortOrder === i.field;
        const down = sortOrder === `-${i.field}`;
        const sort = up ? 'up' : 'down';
        return (
          <Button
            active={up || down}
            onClick={() => onChangeSorting(i.field)}
            key={i.field} content={i.title}
            icon={(up || down) ? 'angle ' + sort : ''}>
          </Button>
        );
      })}
    </Button.Group>
  )
}

export default connect((state: any) => ({
  sortOrder: state.sortOrder
}))(SortControls);