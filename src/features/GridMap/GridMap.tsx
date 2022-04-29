import React from 'react';
import { Button, Grid, DialogContentText, Dialog, DialogContent, DialogActions } from '@mui/material';

import { GridCellMemo } from './GridCell';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import ws from '../../app/ws';
import {
    selectGridMap,
    selectStatus,
    selectNewGame,
    setNewGame
} from './GridMapSlice';
interface AppProps {
    difficulty: number;
}

export const GridMap = (props: AppProps) => {
    const gridMap = useAppSelector(selectGridMap);
    const status = useAppSelector(selectStatus);
    const newGame = useAppSelector(selectNewGame);
    const dispatch = useAppDispatch();

    const handleNewGame = () => {
        ws.send(`new ${props.difficulty}`);
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
                                <GridCellMemo key={j} x={j} y={i} cell={cell} newGame={newGame} />
                            ))}
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Button onClick={handleNewGame} color="inherit">Star again</Button>
            <Dialog open={['win', 'lose'].includes(status)}>
                <DialogContent>
                    {handleStatus()}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleNewGame}>Start again</Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
};