import './style.css';

export default function Article (props){
    let item = props.item;
    return(
        <article key={item.id}>
            <h1>{item.titulo}</h1>
            <div className='container-img'>
                <img className="img" src={item.capa} alt={item.titulo}/>
                <div className='div-text'>
                <p className='subtitle'>
                    {item.subtitulo}
                    <a href='#' className='btn'>
                    <i className='fa fa-share'></i>
                    Matéria completa
                    </a>
                </p>
                </div>
            </div>
        </article>
    );
}