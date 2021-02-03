import React from 'react';

class BadgeForm extends React.Component {

    state = {
    };
    handleClick = e => {
        console.log("button clicked");
    }

    handleSubmit = e => {
        e.preventDefault()

        console.log("Form Submited");
    }
    render() {
        return (
            <div className="">
                {this.props.error && (
                    <h3 className="text-danger">{this.props.error.message}</h3>
                )}
                <form onSubmit={this.props.onSubmit} action="">
                    <div className="form-group">
                        <label htmlFor="">First Name</label>
                        <input
                            onChange={this.props.onChange}
                            name="firstName"
                            type="text"
                            className="form-control"
                            value={this.props.formValues.firstName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Last Name</label>
                        <input
                            onChange={this.props.onChange}
                            name="lastName"
                            type="text"
                            className="form-control"
                            value={this.props.formValues.lastName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input
                            onChange={this.props.onChange}
                            name="email"
                            type="text"
                            className="form-control"
                            value={this.props.formValues.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Job Title</label>
                        <input
                            onChange={this.props.onChange}
                            name="jobTitle"
                            type="text"
                            className="form-control"
                            value={this.props.formValues.jobTitle} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Twitter</label>
                        <input
                            onChange={this.props.onChange}
                            name="twitter"
                            type="text"
                            className="form-control"
                            value={this.props.formValues.twitter} />
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>

                    {/* {this.props.error && (
                        <p className="text-danger">{this.props.error.message}</p>
                    )} */}
                </form>
            </div>
        )
    }
}


export default BadgeForm