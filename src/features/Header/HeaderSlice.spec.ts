import headerReducer, {
    setDifficulty,
    HeaderState
} from './HeaderSlice';

describe('header reducer', () => {
    const initialState: HeaderState = {
        difficulty: 1
    };

    it('setting difficulty', () => {
        const actual = headerReducer(initialState, setDifficulty(3));

        expect(actual.difficulty).toEqual(3);
    });
});