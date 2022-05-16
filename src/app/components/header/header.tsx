import logo from '../../assets/logo.svg';
import leftlogo from '../../assets/leftlogo.png'
import rightlogo from '../../assets/rightlogo.jpg'
import './header.scss'
export const Header = () =>{

    return (
        <header className="App-header">
            <nav>
            <div>
                <a href='/'><img src={leftlogo} className="App-logo left" alt="logo" /></a>
                <a href='/'><img src={rightlogo} className="App-logo right" alt="logo" /></a>
                <a>ads</a>
                <a>ads</a>
            </div>
            </nav>


      </header>
    )
    
}