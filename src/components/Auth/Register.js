import React from 'react'
import {  Button, Container, Icon, Segment, Header, Grid, Message } from 'semantic-ui-react'
import axios from 'axios'
import RegisterForm from './RegisterForm'
import { Link, withRouter } from 'react-router-dom'
import Flash from '../../lib/Flash'


class Register extends React.Component{
  constructor(){
    super()


    this.state = {
      imageSuccess: false,
      postData: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.changeSuccess = this.changeSuccess.bind(this)
  }



  handleChange({ target: {name, value }}) {
    const postData = {...this.state.postData, [name]: value }
    const errors= {}
    this.setState({ postData, errors })
  }

  changeSuccess(){
    console.log('changing state')
    this.setState({ imageSuccess: true })
  }

  handleSubmit(e){
    e.preventDefault()
    axios.post('/api/register', this.state.postData)
      .then(res => {
        Flash.setMessage('success', res.data.message)
        this.props.history.push('/login')
      })
      .catch(err => this.setState({ errors: err.response.data }))
  }



  render(){
    return(
      <Container>



        <RegisterForm
          changeSuccess={this.changeSuccess}
          imageSuccess={this.state.imageSuccess}
          errors={this.state.errors}
          postData={this.state.postData}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </Container>
    )
  }
}


export default withRouter(Register)
