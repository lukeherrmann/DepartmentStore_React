import React from "react";
import axios from "axios";
import { Segment, Header, } from "semantic-ui-react";


class Items extends React.Component{
  state = { items: [], }

  componentDidMount() {
    axios.get(`/api/items/${this.props.match.params.id}`)
    .then( res => {
      this.setState({ item: res.data, });
    })
  }

  render(){
    const { item_name, item_description, price, } = this.state.items;
    return (
      <div>
      <Segment>
        <Header as="h1">{ item_name }</Header>
        <Header as="h3">{ item_description }</Header>
        <Header as="h5" color="grey">${ price }</Header>
        <p>{ item_description }</p>
      </Segment>
      </div>
    )
  }
}

export default Items;