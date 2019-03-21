import React from "react"
import axios from "axios"
import HeaderText from "./HeaderText";
import { Link, } from "react-router-dom"
import { Header, Segment, Button, } from "semantic-ui-react"

class Item extends React.Component {
  state = { item: {} }

  componentDidMount() {
    const { match: { params: { id, department_id } } } = this.props
    axios.get(`/api/departments/${department_id}/items/${id}`)
      .then(res => {
        this.setState({ item: res.data, })
      })
  }

  render() {
    const { match: { params: { id, department_id } } } = this.props
    const { item_name, item_description, price, } = this.state.item
    return (
      <div>
        <Segment>
          <HeaderText fSize="large">
            {item_name}
          </HeaderText>
          <HeaderText fSize="medium">
            {price}
          </HeaderText>
          <p>{item_description}</p>
        </Segment>
      </div>
    )
  }
}

export default Item