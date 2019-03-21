import React from "react";
import DepartmentsForm from "./DepartmentsForm"
import axios from "axios";
import { Link, } from "react-router-dom";
import HeaderText from "./HeaderText";
import { Card, Button, Icon, Segment } from "semantic-ui-react";

class Departments extends React.Component {
  state = { departments: [], editing: false, }

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
        {this.state.editing ? <DepartmentsForm {...departments} />
          :
          <Card.Content>
            <Card.Header>{d.name}</Card.Header>
            <Card.Description>
              {d.description}
            </Card.Description>
          </Card.Content>
        }
        <Card.Content extra>
          <Button icon color='red' size="tiny" >
            <Icon onClick={() => this.deleteDepartment(d.id)} name="trash" />
          </Button>
          <Button onClick={() => this.toggleEdit(d.id)} icon size="tiny">
            <Icon name="edit" />
          </Button>
          <Button as={Link} size="tiny" to={`/departments/${d.id}/items`}>
            See Items...
          </Button>
        </Card.Content>
      </Card>
    ))
  }

  deleteDepartment = (id) => {
    axios.delete(`/api/departments/${id}`)
      .then(res => {
        const { departments, } = this.state;
        this.setState({ departments: departments.filter(d => d.id !== id), })
      })
  }

  toggleEdit = (id) => this.setState({ editing: !this.state.editing })

  render() {
    return (
      <div>
        <HeaderText fSize='large'>Luke's Department Store</HeaderText>
        <br />
        <br />
        <Segment>
          <HeaderText fSize='medium'>All Departments</HeaderText>
        </Segment>
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