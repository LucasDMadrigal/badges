import React from 'react';
import './styles/BadgeNew.css';
import logo from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import md5 from 'md5'
import api from '../api'

class BadgeNew extends React.Component {

  state = {
    form: {
      firstName: "",
      lastName: "",
      twitter: "",
      jobTitle: "",
      email: "",
      avatarUrl: ""
    }

  }


  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    console.log(this.state.form.email);
    this.setState({
      loading: true,
      error: null,
    })

    try {
      await api.badges.create(this.state.form)

      this.setState({
        loading: false,
      })
    }
    catch (err) {
      this.setState({
        loading: false,
        error: err,
      })
    }
  }
  render() {

    return (
      <div>
        <div className="BadgeNew__hero">
          <img className="Badge_hero-img img-fluid" src={logo} alt="" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                twitter={this.state.form.twitter || 'TWITTER'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                email={this.state.form.email || 'EMAIL'}
                avatarUrl={this.state.form.avatarUrl} />
            </div>

            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
                onSubmit={this.handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
