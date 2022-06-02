import './style.css';
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
         faAppleWhole,
         faLightbulb,
         faDumbbell
        } from '@fortawesome/free-solid-svg-icons'

function getIcon(categoria){
    switch(categoria){
        case 'Dieta':
            return <FontAwesomeIcon icon={faAppleWhole} />;
        case 'Emagrecimento':
            return <FontAwesomeIcon icon={faDumbbell} />;
        default:
            return <FontAwesomeIcon icon={faLightbulb} />;
    }
}

function Medium(props){
    let item = props.item
    return(
        <article key={item.id} id={item.id} name={item.id}>
            <h1>{item.titulo}</h1>
            <p className='tags'> {getIcon(item.categoria)} {item.categoria}</p>
            
            <div className='container-img'>
                <img className="img img-medium" src={item.capa} alt={item.titulo}/>
                <div className='div-text'>
                    <p className='subtitle'>
                        {item.subtitulo}
                        <a className='btn'>
                            <i className='fa fa-share'></i>
                            Matéria completa
                        </a>
                    </p>
                </div>
            </div>
        </article>
    );
}

function Small(props){
    let item = props.item
    return(
        <Link to={"/artigos#" + item.id} className="link" >
            <article key={item.id} className="small" id={item.id} name={item.id}>
                <h1>{item.titulo}</h1>
                <div className='container-img'>
                    <img className="img img-small" src={item.capa} alt={item.titulo}/>
                </div>
            </article>
        </Link>
    );
}

function Big(props){
    let item = props.item
    return(
        <Link to={"/artigos#" + item.id} className="link">
            <article key={item.id} className="big" id={item.id} name={item.id}>
                <div className='container-img'>
                    <img className="img img-big" src={item.capa} alt={item.titulo}/>
                    
                </div>

            <div className='div-text-big'>
                    <h1>{item.titulo}</h1>
                    <p className='subtitle subtitle-big'>
                        {item.subtitulo}
                        <a className='btn'>
                            <i className='fa fa-share'></i>
                            Matéria completa
                        </a>
                    </p>
                </div>

            </article>
        </Link>
    );
}

export default function Article (props){
    let item = props.item;
    let size = props.size;

    switch (size){
        case 'big':
            return <Big item={item}/>

        case 'small':
            return <Small item={item}/>
            
        default:
            return <Medium item={item}/>
    }

}