import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import {connect} from 'react-redux'
import {requestRobots, setSearchField} from '../Action'
import { searchRobots } from '../reducer';

const mapStateToProps =(state)=>{
  console.log(state)
  return{
    searchField:state.searchRobots.searchField,
    robots : state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error : state.requestRobots.error
  }
  
}

const mapDispatchToProps = (dispatch)=>{
  return{ 
    onSearchChange:(e)=>dispatch(setSearchField(e.target.value)),
    onRequestRobots:()=>requestRobots(dispatch)
  }}

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: []
        }
  }

  componentDidMount() {
    this.props.onRequestRobots();
  }

  
  render() {
    
    const {searchField , onSearchChange , robots} = this.props
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(App);