import React from 'react';

import { connect } from 'react-redux';
import { fetchCat, adoptCat, fetchDog, adoptDog } from './actions/index';
import Pet from './components/pet';

import './App.css';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchDog());
    this.props.dispatch(fetchCat());
  }
  render() {
    console.log('props', this.props);   

    return (
      <div>
        <header className="header">
          <h1 className="title">Adoption Shelter</h1>
        </header>
        <div className="container">
        <Pet {...this.props.dog} onAdoptPet={() => this.props.dispatch(adoptDog())} />
        <Pet {...this.props.cat} onAdoptPet={() => this.props.dispatch(adoptCat())} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dog: state.dog.data,
  cat: state.cat.data
});

export default connect(mapStateToProps)(Dashboard);
