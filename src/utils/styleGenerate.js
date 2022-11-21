import objToCSS from "./objToCSS";
import {addStyle} from './addStyle'

export const styleArr  = [];

function generateStyle(id, style) {
    //here id is className and style is style props
    let styles = objToCSS(style);
    styleArr.push(`.${id} {${styles}}`)
    addStyle()
}

export default generateStyle;
