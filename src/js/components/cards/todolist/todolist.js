import makeElement from "../../../utils/makeElement"
import * as styles from './styles.module.scss'
import link from "../../ui/link"

const todolist = function (){
    const template = `
    <section id="directory" class="${styles.todolist}">
    <header class="${styles.section_heading}">
        <h1>Zachary Fedorak Todo List</h1>
        <p>Don't Be Late!</p>
        <a class="addtodo" href="/addPage">Add Todo</a>
    </header>

        
        <div id="todos">
        
        </div>
    <footer>

    </footer>
</section>
    `

    return makeElement(template)
}

export default todolist