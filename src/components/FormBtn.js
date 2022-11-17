import React from 'react';
import generatedId from '../utils/idGenerator';
import styleGenerate from '../utils/styleGenerate';

const FormBtn = ({item}) => {
    const {content, style} = item;
    const id = generatedId();

    styleGenerate(id, style);
    
    return <button className={id}>{content}</button>
};

export default FormBtn;