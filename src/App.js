import './App.css'
import Header from "./Components/Header";
import React, { Component } from 'react';
import Article from './Components/Article';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      search: '',
      postsFiltered: []
    }
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

  render(){
    return(
      <div className='container'>
        <Header/>
        {this.state.posts.map((item) =>{
          return(
            <Article item={item} />
          );
        })}
      </div>
    );
  }
}