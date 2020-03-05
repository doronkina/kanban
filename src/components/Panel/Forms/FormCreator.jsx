import React from 'react';
import {Field} from 'redux-form';

const FormCreator = props => {
    return (
        <form onSubmit={props.handleSubmit} onDoubleClick={props.onDoubleClick} 
            className="row m-0 my-2 justify-content-between border border-secondary rounded bg-white" 
        >
            <Field name={props.fieldName} component='textarea' type='text' placeholder={props.fieldPlaceholder} autoFocus={true} 
                className="col border-0 rounded"
            />
            <button className="col-auto border-0 rounded">
                <i className={props.iClassName} />
            </button>
        </form>
    )
}

export default FormCreator;