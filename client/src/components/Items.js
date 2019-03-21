import React from "react";
import axios from "axios";
import HeaderText from "./HeaderText";
import {Link, } from "react-router-dom"
import { Card, Button, Icon, Segment } from "semantic-ui-react";


class Items extends React.Component {
  state = { items: [], }

  componentDidMount() {

    axios.get(`/api/departments/${this.props.match.params.department_id}/items`)
      .then(res => {
        this.setState({ items: res.data, });
      })
  }

  renderItems = () => {
    const { items, } = this.state;
    return items.map(i => (
      <Card key={i.id}>
        <Card.Content>
          <Card.Header>{i.item_name}</Card.Header>
          <Card.Meta as="h2">
            ${i.price}
          </Card.Meta>
          <Card.Description>
            {i.item_description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button onClick={() => this.deleteItem(i.id)} icon color='red' size="tiny" >
            <Icon name="trash" />
          </Button>
          <Button icon size="tiny">
            <Icon name="edit" />
          </Button>
          <Button as={Link} size="tiny" to={`/departments/${this.props.match.params.department_id}/items/${i.id}`} >
            Show Item...
    </Button>
        </Card.Content>
      </Card>
    ))
  }

  deleteItem = (id) => {
    axios.delete(`/api/departments/${this.props.match.params.department_id}/items/${id}`)
      .then(res => {
        const { items, } = this.state
        this.setState({ items: items.filter(i => i.id !== id) })
      })
  }

  render() {
    return (
      <div>
        <Segment>
          <HeaderText fSize="large">All Items</HeaderText>
        </Segment>
        <Card.Group>
          {this.renderItems()}
        </Card.Group>
      </div>
    )
  }
}

export default Items;