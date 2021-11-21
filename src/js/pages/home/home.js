
import pageHeader from "../../components/ui/pageheader/"
import link from "../../components/ui/link/link"
import * as styles from './styles.module.scss'
const homePage = function(){
    // create page container style with modules or global scss, css
    const page = document.createElement('div') 
  
    // clean out page contents before building
    page.innerHTML = '' 

    function render(){
    
   
        page.append(pageHeader({
            label: "Zachary Fedorak Todo List",
            tagline:"Don't Be Late!",
            children: [link("todo list", "/todolist")]
        }))

       
        
    }
   

    // call render function to build page + components
    render()
    return page
}

export default homePage