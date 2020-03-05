import React, {useState} from 'react';

import NewTaskForm from './Forms/NewTaskForm';
import Task from './Task/Task';

const Panel = props => {
    const [newTaskForm, setNewTaskForm] = useState(false);

    const addNewTask = values => {
        setNewTaskForm(false);
        props.createTask(props.panelTitle, values.newTask);
    };

    let tasks = props.tasks.map(task =>
        <Task key={task.id} task={task} deleteTask={props.deleteTask} editTask={props.editTask} />
    );

    const drop = e => {
        e.preventDefault();
        const id = e.dataTransfer.getData("id");
        const title = e.dataTransfer.getData("title");
        const newPanelId = e.target.id !== '' ? e.target.id : e.target.parentElement.parentElement.id;

        props.deleteTask(+id);
        props.createTask(newPanelId, title, +id);
    }

    return (
        <div className="col m-2 p-0 border border-dark rounded d-flex flex-column">
            <div className="row m-0 py-2 font-weight-bold text-light bg-dark">
                <div className="col-2"></div>
                <div className="col-8 text-center">{props.panelTitle}</div>
                <div className="col-2 text-right">{props.tasks.length}</div>
            </div>
            <div id={props.panelTitle} onDrop={drop} onDragOver={ e => e.preventDefault() } className="col overflow-auto bg-light">
                {tasks}
                {newTaskForm && <NewTaskForm onSubmit={addNewTask} />}
            </div>
            <div className="row m-0 py-2 justify-content-center bg-dark">
                <button className="col-auto border-0 text-light bg-transparent">
                    {newTaskForm ?
                        <i onClick={ () => setNewTaskForm(false) } className="fas fa-minus-circle" /> : 
                        <i onClick={ () => setNewTaskForm(true) } className="fas fa-plus-circle" />
                    }
                </button>
            </div>
        </div>
    )
}

export default Panel;