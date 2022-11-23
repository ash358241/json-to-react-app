import React from 'react';
import generatedId from '../utils/idGenerator';
import styleGenerate from '../utils/styleGenerate';

const Text = ({data}) => {
    const id = generatedId();
    const {content, style} = data;

    styleGenerate(id, style);
    
    return <div className={id} dangerouslySetInnerHTML={{__html: content}} />;
};

export default Text;