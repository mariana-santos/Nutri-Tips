import { Component } from 'react';
import './App.css';
import logo from './assets/logo.png'
import 'font-awesome/css/font-awesome.min.css';

function Post(props){
  let item = props.item;
  return(
    <article key={item.id}>
      <h1>{item.titulo}</h1>
      <div className='container-img'>
        <img className="img" src={item.capa} alt={item.titulo}/>
        <div className='div-text'>
          <p className='subtitle'>
            {item.subtitulo}
            <a href='#'>
              <i className='fa fa-share'></i>
              Matéria completa
            </a>
          </p>
        </div>
      </div>
    </article>
  );
}

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    const url = 'https://sujeitoprogramador.com/rn-api/?api=posts'

    fetch(url)
      .then((res)=> res.json())
      .then((json)=> {
        let state = this.state
        state.posts = json
        this.setState(state)
        // console.log(this.state.posts)
      })
  }
  render(){
    return(
      <div className='container'>

        <header>
          <div className='logo'>
            <img src={logo} alt='logo'/>
            <h1 className='app-name'>Nutri tips</h1>
          </div>
          
          <nav>
            <ul>
              <li>Home</li>
              <li>Artigos</li>
              <li>Sobre nós</li>
              <li>Contate-nos</li>
            </ul>
          </nav>

        </header>

        {this.state.posts.map((item) =>{
          return(
            <Post item={item} />
          );
        })}
      </div>
    );
  }
}