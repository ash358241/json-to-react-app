import React from 'react';
import generatedId from '../utils/idGenerator';
import styleGenerate from '../utils/styleGenerate';

const Image = ({ data }) => {
    const id = generatedId();
    const {style} = data;
    const {src, alt} = data.attr;

    styleGenerate(id, style);

    return <img className={id} src={src} alt={alt} />
};

export default Image;