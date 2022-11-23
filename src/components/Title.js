import React from 'react';
import generatedId from '../utils/idGenerator';
import styleGenerator from '../utils/styleGenerate';

const Title = ({ data }) => {
    const id = generatedId();
    const {content, style} = data;

    styleGenerator(id, style);

    const CustomTag = data.level;
    
    return <CustomTag className={id} dangerouslySetInnerHTML={{__html: content}} />
};

export default Title;