import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { Card, Header, Button, Icon } from "semantic-ui-react";

class Departments extends React.Component {
  state = { departments: [], }

  componentDidMount() {
    axios.get("/api/departments")
      .then(res => {
        this.setState({ departments: res.data, })
      })
  }


  renderDepartments = () => {
    const { departments, } = this.state

    if (departments.length <= 0)
      return <h2>No Departments Available :(</h2>
    return departments.map(d => (
      <Card key={d.id}>
        <Card.Content>
          <Card.Header>{d.name}</Card.Header>
          <Card.Description>
            {d.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button icon color='red' size="tiny">
            <Icon name="trash" />
          </Button>
          <Button icon size="tiny">
            <Icon name="edit" />
          </Button>
          <Button size="tiny">
            See More...
          </Button>
        </Card.Content>
      </Card>
    ))
  }

 deleteDepartment = (id) => {
    axios.delete(`/api/departments/${id}`)
    .then( res => {
      debugger
      const { departments, } = this.state;
      this.setState({ departments: departments.filter(t => t.id !== id), })
    })
  }

  render() {
    return (
      <div>
        <Header as="h1">Departments</Header>
        <br />
        <Button as={Link} color="blue" to="/departments/new">
          Add Department
        </Button>
        <br />
        <br />
        <Card.Group>
          {this.renderDepartments()}
        </Card.Group>
      </div>
    )
  }
}

export default Departments;