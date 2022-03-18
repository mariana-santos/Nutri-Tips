import './App.css'
import Header from "./Components/Header";
import React, { Component } from 'react';
import Article from './Components/Article';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      main: {},
      search: '',
      postsFiltered: [],
      smallposts: []
    }
  }

  componentDidMount(){
    const url = 'https://sujeitoprogramador.com/rn-api/?api=posts'

    fetch(url)
      .then((res)=> res.json())
      .then((json)=> {
        let state = this.state
        state.posts = json
        state.main = json[0]
        this.state.postsFiltered = json
        state.smallposts = [json[1], json[2], json[3], json[4]]
        this.setState(state)  
      })
  }

  render(){
    return(
      <div className='container'>
        <Header/>
        
        <Article item={this.state.main} size="big"/>

        <div className='row'>
          {this.state.smallposts.map(item => {
            return(
            <Article item={item} size="small"/>
            );
          })}
        </div>

      </div>
    );
  }
}