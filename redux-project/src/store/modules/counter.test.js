import counter, * as counterActions from './counter';

describe('counter', () => {
    describe('actions', () => {
        it('should create actions', () => {
            const expectedActions = [
                { type: 'counter/INCREMENT' },
                { type: 'counter/DECREMENT' },
            ];
            const actions = [
                counterActions.increment(),
                counterActions.decrement(),
            ];
            expect(actions).toEqual(expectedActions);
        });
    });
    describe('reducer', () => {
        let state = counter(undefined, {});
        it('should return the initialState', () => {
            expect(state).toHaveProperty('number', 0);
        });

        it('should increment', () => {
            state = counter(state, counterActions.increment());
            expect(state).toHaveProperty('number', 1);
        });

        it('should decrement', () => {
            state = counter(state, counterActions.decrement());
            expect(state).toHaveProperty('number', 0);
        });
    })

});