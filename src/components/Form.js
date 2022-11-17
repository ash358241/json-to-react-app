import React from 'react';
import generatedId from '../utils/idGenerator';
import styleGenerate from '../utils/styleGenerate';
import FormBtn from './FormBtn';
import FormField from './FormField';

const Form = ({ data }) => {
    const id = generatedId();
    const {style: formStyle, submitButton} = data.form;
    const {items, style: inputFieldStyle} = data.form.fields;

    styleGenerate(id, formStyle);
    
    return <form className={id}>
        {
            items.map(item => <FormField item={item} style={inputFieldStyle} key={item.id}/>)
        }
        <FormBtn item={submitButton}/>
    </form>
};

export default Form;