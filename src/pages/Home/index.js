import { Component } from 'react';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';

// function Post(props){
//   let item = props.item;
//   return(
//     <article key={item.id}>
//       <h1>{item.titulo}</h1>
//       <div className='container-img'>
//         <img className="img" src={item.capa} alt={item.titulo}/>
//         <div className='div-text'>
//           <p className='subtitle'>
//             {item.subtitulo}
//             <a href='#' className='btn'>
//               <i className='fa fa-share'></i>
//               Matéria completa
//             </a>
//           </p>
//         </div>
//       </div>
//     </article>
//   );
// }

// function Header(props){
//   return(
//     <header>
//       <div className='logo'>
//         <img src={logo} alt='logo'/>
//         <h1 className='app-name'>Nutri Tips</h1>
//       </div>

//       <div className='searchbar'>
//         <input 
//           placeholder='O que você está procurando?'
//           onChange={(ev)=> props.this.setState({search: ev.target.value})}
//           value={props.this.state.search}
//         />
//         <button onClick={props.this.FilterPosts}>
//           <i className='fa fa-search'></i>
//         </button>
//       </div>
          
//       <nav>
//         <ul>
//           <a href='#'><li className='active'>Home</li></a>
//           <a href='#'><li>Artigos</li></a>
//           <a href='#'><li>Sobre nós</li></a>
//           <a href='#'><li>Contate-nos</li></a>
//         </ul>
//       </nav>
//     </header>
//   );
// }

export default class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      search: '',
      postsFiltered: []
    }

    // this.FilterPosts = this.FilterPosts.bind(this);
  }

  componentDidMount(){
    const url = 'https://sujeitoprogramador.com/rn-api/?api=posts'

    fetch(url)
      .then((res)=> res.json())
      .then((json)=> {
        let state = this.state
        state.posts = json
        this.state.postsFiltered = json
        this.setState(state)
      })
  }

//   FilterPosts(){
//     let posts = this.state.posts;
//     let postsFiltered = posts;
//     let search = this.state.search.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    
//     // console.log(search)
//     // console.log('VEIO AQUI')

//     if(search !== ''){

//       function contains(post){
//         let titulo = (post.titulo).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
//         let subtitulo = (post.subtitulo).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

//         return titulo.includes(search) || subtitulo.includes(search)
//       }
//       console.log(posts.filter(contains))
//       postsFiltered = posts.filter(contains)
      
//     }

//     this.setState(this.state.postsFiltered = postsFiltered);
    
//     console.log(this.state.postsFiltered)
//     return postsFiltered;
//   }

  render(){

    return(
      <div className='container'>

        {/* <Header this={this}/> */}

        {/* {this.state.postsFiltered.map((item) =>{
          return(
            <Post item={item} />
          );
        })} */}

        <h1>HELOOOOOOO</h1>

      </div>
    );
  }
}