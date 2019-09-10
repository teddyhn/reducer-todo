export const initialState = [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
}];

export const Reducer = (state, action) => {
    switch (action.type) {
        case "ADD_NEWTODO":
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: new Date()
                }
            ];
        default:
            return state;
    }
};