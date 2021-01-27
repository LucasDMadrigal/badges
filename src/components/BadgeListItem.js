import React from 'react';

class BadgeListItem extends React.Component {
    render() {
        return (
            <div className="BadgesListItem">
                <img className="BadgesListItem__avatar" src={this.props.badge.avatarUrl} alt="" />
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