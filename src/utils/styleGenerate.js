import objToCSS from "./objToCSS";
let styleTag = document.getElementById("styleTag");

function generateStyle(id, style) {
    //here id is className and style is style props
    let styles = objToCSS(style);
    styleTag.appendChild(document.createTextNode(`.${id} {${styles}}`));
}

export default generateStyle;
