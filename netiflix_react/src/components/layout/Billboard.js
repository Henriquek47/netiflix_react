import classes from './Billboard.module.css';
import img from '../../images/billboard-img.jpg';
import movieLogo from '../../images/movie-logo.png';
import HorizontalList from './HorizontalList';

function Billboard() {
    return (
        <div>
            <span className={classes.billboardContainer}>
                <div className={classes.billboardRow} role='region'>
                    <div>
                        <img className={classes.img} src={img} alt='sem imagem' />
                        <img className={classes.logo} src={movieLogo} alt='sem imagem'></img>
                        <h5 className={classes.billboardText}>Desafiado por um professor de música
                            exigente, o baterista Andrew <br /> toma uma decisão: será um astro do Jazz, a qualquer
                            custo.<br /> Mesmo que isso destrua sua personalidade.</h5>
                        <div className={classes.billboardLinks}>
                            <button type='button' className={classes.button1}>Assistir</button>
                            <button type='button' className={classes.button2}>Mais Informações</button>
                        </div>
                        <div className={classes.HorizontalList}><HorizontalList /></div>
                    </div>
                </div>
            </span>
        </div>
    )
}

export default Billboard;        