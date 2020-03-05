import React from 'react';
import {reduxForm} from 'redux-form';

import FormCreator from './FormCreator';

const EditTaskForm = props => {
    return (
        <FormCreator 
            handleSubmit={props.handleSubmit}
            onDoubleClick={ () => props.setEditTaskForm(false) }
            fieldName='editTask'
            fieldPlaceholder={props.title}
            iClassName="fas fa-edit"
        />
    )
}

export default reduxForm({form: 'editTask'})(EditTaskForm);