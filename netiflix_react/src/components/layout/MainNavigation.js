import { Link }from 'react-router-dom';
import classes from './MainNavigation.module.css';
import logo from '../../images/logo.png';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div>
                <Link to='/'>
                    <img className={classes.logo} src={logo} alt='sem imagem' />
                </Link>                
            </div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Inicio</Link>
                        </li>
                        <li>
                            <Link to='/series'>Series</Link>
                        </li>
                        <li>
                            <Link to='/filmes'>Filmes</Link>
                        </li>
                        <li>
                            <Link to='/minha-lista'>Minha Lista</Link>
                        </li>
                        <li>
                            <h5>Busca</h5>
                        </li>
                        <li>
                            Notif
                        </li>
                        <li>
                            Perfis
                        </li>
                    </ul>
                </nav>            
        </header>    
    );
}

export default MainNavigation;