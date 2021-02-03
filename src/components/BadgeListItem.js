import React from 'react';
import Gravatar from './Gravatar'
class BadgeListItem extends React.Component {
    render() {
        return (
            <div className="BadgesListItem">

                <Gravatar className="BadgesListItem__avatar"
                    className="BadgesListItem__avatar"
                    email={this.props.badge.email}
                />


                {this.props.badge.firstName} {this.props.badge.lastName}
                <br />
                @{this.props.badge.twitter}
                <br />
                {this.props.badge.jobTitle}
            </div>
        )
    }
}

export default BadgeListItem