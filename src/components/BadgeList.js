import React from 'react';

import { Link } from 'react-router-dom';

import Badges from '../pages/Badges';
import BadgeListItem from './BadgeListItem'
import './styles/BadgesList.css'
class BadgeList extends React.Component {
    render() {
        if (this.props.badges.length === 0) {
            return (
                <div className="">
                    <h3>No se encontro ningun badge</h3>
                    <Link to="/badges/new" className="btn btn-primary">
                        CREATE NEW BADGE
                    </Link>
                </div>
            )
        }
        return (
            <div className="BadgesList">
                <ul className="list-unstyled">
                    {
                        this.props.badges.map(badge => {
                            return (
                                <li key={badge.id}>
                                    <Link
                                        className="text-reset text-decoration-none"
                                        key={badge.id}
                                        to={`/badges/${badge.id}/edit`}>
                                        < BadgeListItem badge={badge} />
                                    </Link>
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