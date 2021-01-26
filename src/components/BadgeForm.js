import React from 'react';

class BadgeForm extends React.Component {
    handleChange = e => {
        console.log({
            value: e.target.value,
            name: e.target.name
        })
    }

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
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit} action="">
                    <div className="form-group">
                        <label htmlFor="">FirstName</label>
                        <input onChange={this.handleChange} name="firstName" type="text" className="form-control" />
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}


export default BadgeForm