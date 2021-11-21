import homePage from '../pages/home'
import todoListing from "../pages/todolist";
import deletePage from "../pages/delete/";
import editPage from '../pages/edit';
import addPage from '../pages/add';
import notFound from "../pages/notfound";
const routes = {
"/": homePage,
"/todolist":todoListing,
"/delete":deletePage,
"/editPage":editPage,
"/addPage":addPage,
"/*":notFound,
}
const Router = function (pathname, params=null) {
const isValidRoute = Object.keys(routes).find(key => key===pathname)
const app = document.querySelector('#app')
app.innerHTML = ''
window.history.pushState(
{},
pathname,
window.location.origin + pathname
)
if(isValidRoute === undefined || isValidRoute ===''){
app.appendChild(notFound())
}else{
app.appendChild(routes[isValidRoute](params) )
}
}
export { Router}