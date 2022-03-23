import React, {Component} from "react";
import Header from "../../Components/Header";
import Footer from '../../Components/Footer';
import Article from "../../Components/Article";
import './style.css'

export default class Articles extends Component {
    constructor(props){
        super(props);
        this.state = {
          posts: [],
          search: '',
          postsFiltered: [],
          select: 'Todos'
        }

        this.FilterPosts = this.FilterPosts.bind(this)
      }
    
      componentDidMount(){
        const url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
    
        fetch(url)
          .then((res)=> res.json())
          .then((json)=> {
            let state = this.state
            state.posts = json
            state.postsFiltered = json
            state.postsFiltered[0].categoria = 'Dieta'
            this.setState(state)
          })
      }

      componentDidUpdate(){
        let closebtn = document.getElementById('closebtn');

        this.state.search !== '' ? closebtn.style.visibility = 'visible' : 
        closebtn.style.visibility = 'hidden'
      }

      FilterPosts(){

        let posts = this.state.posts;
        let postsFiltered = posts;
        let categoria = this.state.select;
        let search = this.state.search.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        let searchp = document.getElementById('search');

        if(search !== ''){

          if(categoria === 'Todos'){
            function contains(post){
              let titulo = (post.titulo).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
              let subtitulo = (post.subtitulo).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

              return titulo.includes(search) || subtitulo.includes(search)
            }
            postsFiltered = posts.filter(contains)
          }

          else{
            function contains(post){
              let titulo = (post.titulo).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
              let subtitulo = (post.subtitulo).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

              return ((titulo.includes(search) || subtitulo.includes(search)) && post.categoria === categoria)
            }
            
            postsFiltered = posts.filter(contains)
          }

          // console.log(posts.filter(contains))
          searchp.innerText = `Mostrando ${postsFiltered.length} resultado(s) para ${search} em ${categoria}`
        }
        else{

          if (categoria !== 'Todos') 
          postsFiltered = postsFiltered.filter((post)=>{
            return post.categoria === categoria
          })

          searchp.innerText = `Mostrando ${postsFiltered.length} resultado(s) para ${categoria}`
        }

        this.setState(this.state.postsFiltered = postsFiltered);
        return postsFiltered;
      }
    
      render(){
        return(
          <div className='container'>
            <Header/>

            <div className='searchbar'>

              <input 
                  placeholder='O que você está procurando?'
                  ref={(ev)=> this._searchInput = ev}
                  onChange={(ev) => this.setState({search: ev.target.value})}
                  value={this.state.search}
              >
              </input>

              <button className="close" 
                onClick={() => {
                  let posts = this.state.posts;
                  document.getElementById('search').innerHTML = '';
                  this.setState({search: '', postsFiltered: posts});
                }}>
                  <i className='fa fa-close' id="closebtn"></i>
              </button>

              <select
                value={this.state.select}
                onChange={(ev) => {this.setState({select: ev.target.value})}}>
                  <option value='Todos'>Todos</option>
                  <option value='Dieta'>Dieta</option>
                  <option value='Emagrecimento'>Emagrecimento</option>
                  <option value='Dicas'>Dicas</option>
              </select>

              <button onClick={this.FilterPosts}>
                  <i className='fa fa-search'></i>
              </button>

            </div>

            <p id="search"></p>

            {this.state.postsFiltered.map((item) =>{
              return(
                <Article item={item} key={item.id} size="medium"/>
              );
            })}

            <Footer />
          </div>
        );
      }
}