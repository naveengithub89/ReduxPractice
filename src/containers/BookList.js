import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';

import { bindActionCreators } from 'redux';


class BookList extends Component {

  renderList(){
    return this.props.books.map((book) => {
      return (<li className="list-group-item" id={book.title} key={ book.title } onClick={()=>this.props.selectBook(book)}> { book.title }</li>)
    });
  }

  render(){
    return (
      <ul className="list-group">
        { this.renderList() }
      </ul>)
  }
}

function mapStateToProps(state){
  //Whatever is returned by this will end up as props
    return {
      books : state.books
    }
}
//The esult is available as props.
function mapDispatchToProps(dispatch){
  //whenever selectBook is called, the result should get passed to all the reducers
  return bindActionCreators({ selectBook : selectBook }, dispatch );
}

export default connect (mapStateToProps, mapDispatchToProps)(BookList);
