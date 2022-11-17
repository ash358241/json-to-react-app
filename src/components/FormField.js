import React from 'react';

const FormField = ({item, style}) => {
    const {id, name, label} = item;
    const {placeholder} = item.attr;

    return <input id={id} name={name} label={label} placeholder={placeholder} style={style} />;
};

export default FormField;