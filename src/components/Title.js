import React from 'react';
import generatedId from '../utils/idGenerator';
import styleGenerator from '../utils/styleGenerate';
import parse from "html-react-parser";

const Title = ({ data }) => {
    const id = generatedId();
    const {content, style} = data;

    styleGenerator(id, style);

    const CustomTag = data.level;
    
    return <CustomTag className={id}>{parse(content)}</CustomTag>;
};

export default Title;