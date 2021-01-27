import React from 'react';
import Badges from '../pages/Badges';
import BadgeListItem from './BadgeListItem'
import './styles/BadgesList.css'
class BadgeList extends React.Component {
    render() {
        return (
            <div className="BadgesList">
                <ul className="list-unstyled">
                    {
                        this.props.badges.map(badge => {
                            return (

                                <li key={badge.id}>
                                    < BadgeListItem badge={badge} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default BadgeList