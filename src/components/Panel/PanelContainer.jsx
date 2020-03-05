import {connect} from 'react-redux';

import Panel from './Panel';

import {createTask, deleteTask, editTask} from '../../redux/reducer';

let toDispatch = {
    createTask,
    deleteTask,
    editTask
}

export default connect(null, toDispatch)(Panel);