import makeElement from "../../../utils/makeElement";
import * as styles from "./styles.module.scss";
import link from "../../ui/link";
const todo = function ({ id, category, title, endDate, isComplete}) {
   
 
  const template = `     
          <aside class="${styles.todo}" data-key="${id}">
          
          <header>
          <h3>${category}</h3>

             
          <h2>${title}</h2>
          </header>
          <ul>
             
              <li><span>Due</span><p>${endDate}</p></li>
              <li><p class="category">${isComplete? 'Completed' : 'Not Completed'}</p></li>
          </ul>

          <footer data-key="${id}">
            <button  id="delete" data-key="${id}" >delete</button>
            <span></span>
            <button  id="edit" data-key="${id}">edit</button>
          </footer>
        </aside>  
  `;
  return makeElement(template);
};

export default todo;
