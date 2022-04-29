import gridMapReducer, {
    GridMapState,
    setGridMap
} from './GridMapSlice';

describe('grid map reducer', () => {
    const initialState: GridMapState = {
        gridMap: [],
        difficulty: 1,
        newGame: false,
        status: 'playing',
    };

    it('set grid map values', () => {
        const actual = gridMapReducer(initialState, setGridMap([['1', '3'], ['1', '2']]));
        
        expect(actual.gridMap.length).toEqual(2);
    });
});