import React, { Component } from 'react'; import {
    DropdownButton, Dropdown} from 'react-bootstrap'; import List
from './List';
class FilteredList extends Component {
 constructor(props) {
 super(props);
 // The state is just a list of key/value pair (like a hashmap)

 this.state = {
search: "",
type: "all"
 };
 }
 // Sets the state whenever the user types on the search bar 
 onSearch = (event) => {
 this.setState({search: event.target.value.toLowerCase()});
 }
 onFilter = (event) => {
    this.setState({ type: event });
  }
 filterItem = (item) => {
 // Checks if the current search term is contained in this item
 const searchCon = item.name.toLowerCase().search(this.state.search) !== -1;
 const typeCon = this.state.type === "all" || item.type.toLowerCase() === this.state.type;

 return searchCon && typeCon
 }
 render() {
 return (
 <div className="filter-list">
 <h1>Produce Search</h1>
 <DropdownButton id="typeDropdown" title={"Type"} onSelect={this.onFilter}>
          <Dropdown.Item eventKey="all">All</Dropdown.Item>
          <Dropdown.Item eventKey="fruit">Fruit</Dropdown.Item>
          <Dropdown.Item eventKey="vegetable">Vegetable</Dropdown.Item>
        </DropdownButton>
 <input type="text" placeholder="Search" onChange={this.onSearch} />
 {/* we are taking the items property (which is the list of
 produce), filtering the content to match the search word, then
 passing the filtered produce into the List component. */}
 <List items={this.props.items.filter(this.filterItem)} />
 </div>
 
 );
 }
}

export default FilteredList;