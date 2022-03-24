import './App.css'
import Header from "./Components/Header";
import Footer from './Components/Footer'
import React, { Component } from 'react';
import Article from './Components/Article';
import ReactLoading from 'react-loading';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
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
        state.main = json[3]
        state.postsFiltered = json
        state.smallposts = [json[0], json[1], json[2], json[4]]
        state.isLoading = false;
        this.setState(state)
      })
  }

  render(){
    return(
      <div className='container'>
        <Header/>

        {this.state.isLoading ?
          <div className='container-spin'>
            <ReactLoading type='bubbles' color='#333'/>
          </div> : 
          
          <><Article item={this.state.main} size="big"/>

          <div className='row' style={{marginBottom: '7rem'}}>
            {this.state.smallposts.map(item => {
              return(
                <Article item={item} size="small"/>
              );
            })}
          </div></>}

        <Footer/>

      </div>
    );
  }
}