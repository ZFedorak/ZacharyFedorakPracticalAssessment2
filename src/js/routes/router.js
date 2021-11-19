import homePage from '../pages/home'
import employeeDirectory from "../pages/directory";
import deletePage from "../pages/delete/";
import notFound from "../pages/notfound";
const routes = {
"/": homePage,
"/directory":employeeDirectory,
"/delete":deletePage,
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