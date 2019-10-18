export const initState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 1
    },
    {
        item: 'Learn about Angular',
        completed: false,
        id: 2
    }
];


export const reducer = (state, action) => {
    switch (action.type){
        case "ADD_TASK":
            return [
                ...state,
                {
                    item: action.payload,
                    id: Date.now(),
                    completed: false
                }
            ];
        case "TOGGLE_COMPLETED":
            return state.map(task => {
                if (task.id === action.payload){
                    return {
                        ...task,
                        completed: !task.completed
                    }
                }
                return task;
            });
        case "CLEAR_COMPLETED":
            return state.filter(task => !task.completed);
        default:
            return state;
    }
};