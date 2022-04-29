import React from 'react';
import { Button, Grid, DialogContentText, Dialog, DialogContent, DialogActions } from '@mui/material';

import GridCell from './GridCell';
import { useAppSelector, useAppDispatch  } from '../../app/hooks';
import ws from '../../app/ws';
import {
    selectGridMapValues,
    selectStatus,
    selectDifficulty,
    selectNewGame,
    setNewGame
} from './GridMapSlice';

export const GridMap = () => {
    const gridMap = useAppSelector(selectGridMapValues);
    const status = useAppSelector(selectStatus);
    const difficulty = useAppSelector(selectDifficulty);
    const newGame = useAppSelector(selectNewGame);
    const dispatch = useAppDispatch();

    const handleRefresh = () => {
        ws.send(`new ${difficulty}`);
        dispatch(setNewGame(true));
    };

    const handleStatus = () => {
        switch (status) {
            case 'win':
                return (
                    <DialogContentText color='green'>
                        WINNER!
                    </DialogContentText>
                );
            case 'lose':
                return (
                    <DialogContentText color='red'>
                        YOU LOST!
                    </DialogContentText>
                );
            default:
                return null;
        }
    };

    return (
        <Grid container direction='column' justifyContent='center' alignItems='center'>
            <Grid item>
                <Grid container direction='column' justifyContent='center' alignItems='center'>
                    {gridMap.map((row, i) => (
                        <Grid key={i} item>
                            {row.map((cell, j) => (
                                <GridCell key={j} x={j} y={i} cell={cell} newGame={newGame} />
                            ))}
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Dialog open={['win', 'lose'].includes(status)}>
                <DialogContent>
                    {handleStatus()}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleRefresh}>Start again</Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
};