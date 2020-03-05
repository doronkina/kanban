import React from 'react';
import {reduxForm} from 'redux-form';

import FormCreator from './FormCreator';

const NewTaskForm = props => {
    return (
        <FormCreator
            handleSubmit={props.handleSubmit}
            null
            fieldName='newTask'
            fieldPlaceholder='Enter your task'
            iClassName="fas fa-share"
        />
    )
}

export default reduxForm({form: 'newTask'})(NewTaskForm);