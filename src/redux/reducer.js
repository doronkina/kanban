import * as axios from 'axios';

const CREATE_TASK = 'CREATE-TASK';
const DELETE_TASK = 'DELETE-TASK';
const EDIT_TASK = 'EDIT-TASK';

let initialState = {
    toDo: [],
    inProgress: [],
    done: [],
    freeId: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TASK:
            const newTask = {
                id: state.toDo.length + state.inProgress.length + state.done.length + 1,
                title: action.title,
                completed: false
            };

            const newToDo = [...state.toDo];
            const newInProgress = [...state.inProgress];
            const newDone = [...state.done];
            const newFreeId = [...state.freeId];

            if (action.id) {
                newTask.id = action.id;
                newFreeId.pop();
            } else if (state.freeId[0]) {
                newTask.id = state.freeId[0];
                newFreeId.shift();
            }

            if (action.panelTitle === 'toDo') {
                newToDo.push(newTask);
            } else if (action.panelTitle === 'inProgress') {
                newInProgress.push(newTask);
            } else if (action.panelTitle === 'done') {
                newTask.completed = true;

                newDone.push(newTask);
            }
            
            return {
                ...state,
                toDo: [...newToDo],
                inProgress: [...newInProgress],
                done: [...newDone],
                freeId: [...newFreeId]
            }
        case DELETE_TASK:
            return {
                ...state,
                toDo: [...state.toDo].filter(task => task.id !== action.id),
                inProgress: [...state.inProgress].filter(task => task.id !== action.id),
                done: [...state.done].filter(task => task.id !== action.id),
                freeId: [...state.freeId, action.id]
            }
        case EDIT_TASK:
            const tasksMapping = (task) => {
                if (task.id === action.id) {
                    return {
                        ...task,
                        title: action.title
                    }
                }
                return task
            }

            return {
                ...state,
                toDo: state.toDo.map( task => tasksMapping(task) ),
                inProgress: state.inProgress.map( task => tasksMapping(task) ),
                done: state.done.map( task => tasksMapping(task) ),
            }
        default:
            return state
    }
}

export const createTask = (panelTitle, title, id = null) => ( {type: CREATE_TASK, panelTitle, title, id} );
export const deleteTask = id => ( {type: DELETE_TASK, id} );
export const editTask = (title, id) => ( {type: EDIT_TASK, title, id} );

export const getTasks = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            response.data.forEach(task => {
                let panelTitle = 'toDo';
                if (task.completed) {
                    panelTitle = 'done';
                }

                dispatch( createTask(panelTitle, task.title, task.id) );
            });
        })
}

export default reducer;