
import reactLogo from '../assets/react.svg'
import './Home.scss'

/** 
 * main page file 
*/

function Home (){
    return(
        <div>
            <h2>Home page loaded</h2>
                <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
        </div>
    );
}
// class Home extends React.Component {
    

// }
export default Home;