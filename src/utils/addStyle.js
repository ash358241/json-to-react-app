import {styleArr} from './styleGenerate';
let styleTag = document.getElementById("styleTag");

export function addStyle(){
    // console.log(styleArr.join(" ").toString())
    const styleAdd = styleArr.join(" ").toString()
    styleTag.appendChild(document.createTextNode(styleAdd))
}