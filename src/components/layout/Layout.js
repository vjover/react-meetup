import cssClasses from './Layout.module.css';
import MainNavigation from './MainNavigation.js';
function Layout (props) {
    return (
        <div>
            
            <main className={cssClasses.main}>
                {props.children}
            </main>
        </div> 
    );
}
export default Layout;