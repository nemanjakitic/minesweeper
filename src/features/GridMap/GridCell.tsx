import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useAppDispatch  } from '../../app/hooks';
import {
  setNewGame
} from './GridMapSlice';

import ws from '../../app/ws';

interface GridMapProps {
  x: number;
  y: number;
  cell: string;
  newGame: boolean;
}

const GridMap = (props: GridMapProps) => {
  const { x, y, cell, newGame } = props;
  const [flag, setFlag] = useState(false);
  const dispatch = useAppDispatch();
  flag && newGame && setFlag(false)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (event.button === 2) {
      dispatch(setNewGame(false));
      setFlag(!flag);
    } else if (!flag) {
      ws.send(`open ${x} ${y}`);
    }
  };

  return (
    <Button
      sx={{
        backgroundColor: flag ? 'red' : 'white',
        borderRadius: 0,
        border: '1px solid grey',
        color: cell === '□' ? 'green' : 'blue',
        width: 45,
        height: 45
      }}
      onClick={e => !flag && handleClick(e)}
      onContextMenu={handleClick}>
      {cell}
    </Button>
  );
};

export default GridMap;