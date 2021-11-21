import makeElement from "../../../utils/makeElement";
import * as styles from './styles.module.scss'


const pageHeader = function ({ label, tagline, children }) {
  
  const template = `
    <header class="${styles.defaultHeader} center-in-page">
       
        <h1>${label }</h1>
        <p>${tagline || "default page tagline"}</p>
    </header>
`;

 const header = makeElement(template)
 if(children.length){
    children.forEach(child=>{
         header.append(child)
    })
 }

   
  return header

 
};

export default pageHeader;
