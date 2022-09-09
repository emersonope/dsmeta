import { Logo } from '../iconComponent'
import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <Logo />
                <h1>DSMeta</h1>
                <p>Desenvolvido por
                    <a href="https://www.linkedin.com/in/emersonope/">@emersonope</a>
                </p>
            </div>
        </header>
    )
}

export default Header;