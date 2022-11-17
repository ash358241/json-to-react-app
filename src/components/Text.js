import React from 'react';
import generatedId from '../utils/idGenerator';
import styleGenerate from '../utils/styleGenerate';
import parse from "html-react-parser";

const Text = ({data}) => {
    const id = generatedId();
    const {content, style} = data;

    styleGenerate(id, style);
    
    return <div className={id}>{parse(content)}</div>;
};

export default Text;