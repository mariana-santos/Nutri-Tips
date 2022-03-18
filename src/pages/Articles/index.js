import React, {Component} from "react";
import Header from "../../Components/Header";
import Article from "../../Components/Article";
import './style.css'

function SearchBar (props){
  return(
      <div className='searchbar'>
          <input 
              placeholder='O que você está procurando?'
              // onChange={(ev)=> props.this.setState({search: ev.target.value})}
              // value={props.this.state.search}
          />
          {/* <button onClick={props.this.FilterPosts}> */}

          <select>
              <option>Todos</option>
              <option>Dieta</option>
              <option>Emagrecimento</option>
          </select>

          <button>
              <i className='fa fa-search'></i>
          </button>
    </div>
  );

}

export default class Articles extends Component {
    constructor(props){
        super(props);
        this.state = {
          posts: [],
          search: '',
          postsFiltered: []
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
            this.state.postsFiltered = json
            this.setState(state)  
          })
      }

      FilterPosts(){

        console.log('VEIOOOO')

        let posts = this.state.posts;
        let postsFiltered = posts;
        let search = this.state.search.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        let searchp = document.getElementById('search');

        if(search !== ''){

          function contains(post){
            let titulo = (post.titulo).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            let subtitulo = (post.subtitulo).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

            return titulo.includes(search) || subtitulo.includes(search)
          }
          console.log(posts.filter(contains))
          postsFiltered = posts.filter(contains)

          searchp.innerText = `Mostrando ${postsFiltered.length} resultado(s) para ${search}`
          
        }

        else{
          this.setState(this.state.postsFiltered = posts);
          searchp.innerText = ``
        }

        this.setState(this.state.postsFiltered = postsFiltered);
        
        // console.log(this.state.postsFiltered)
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
              />

              <select>
                  <option>Todos</option>
                  <option>Dieta</option>
                  <option>Emagrecimento</option>
              </select>

              <button onClick={this.FilterPosts}>
                  <i className='fa fa-search'></i>
              </button>

              <p id="search"></p>
            </div>


            {this.state.postsFiltered.map((item) =>{
              return(
                <Article item={item} key={item.id} size="medium"/>
              );
            })}
          </div>
        );
      }
}