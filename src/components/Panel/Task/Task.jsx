import React, {useState} from 'react';

import EditTaskForm from '../Forms/EditTaskForm';

const Task = props => {
    const [editTaskForm, setEditTaskForm] = useState(false);

    const editTask = values => {
        setEditTaskForm(false);
        props.editTask(values.editTask, props.task.id);
    };

    const dragStart = e => {
        e.dataTransfer.setData('id', props.task.id);
        e.dataTransfer.setData('title', props.task.title);
    }

    return (
        <>
            {!editTaskForm ?
                <div draggable="true" onDragStart={dragStart} onDoubleClick={ () => setEditTaskForm(true) } 
                    className="row m-0 my-2 justify-content-between border border-secondary rounded bg-white"
                >
                    <div className="col">
                        {props.task.title}
                    </div>
                    <button className="col-auto border-0 rounded">
                        <i onClick={ () => props.deleteTask(props.task.id) } className="fas fa-trash" />
                    </button>
                </div> :
                <EditTaskForm 
                    onDoubleClick={ () => setEditTaskForm(false) } 
                    onSubmit={editTask} 
                    setEditTaskForm={setEditTaskForm} 
                    title={props.task.title}
                />
            }
        </>
    )
}

export default Task;