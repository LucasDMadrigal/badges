import React, { useState, useMemo } from 'react';

import { Link } from 'react-router-dom';

import BadgeListItem from './BadgeListItem'
import './styles/BadgesList.css'

function useSerchBadges(badges) {
    const [query, setquery] = useState("")

    const [filteredBadges, setFilteredResults] = useState(badges)

    useMemo(() => {
        const results = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
        })

        setFilteredResults(results)

    }, [badges, query])

    return { query, setquery, filteredBadges }
}

const BadgeList = (props) => {

    const badges = props.badges

    const { query, setquery, filteredBadges } = useSerchBadges(badges)

    if (filteredBadges.length === 0) {
        return (

            <div className="">
                <div className="form-group">
                    <label htmlFor=""> Filter Badges</label>
                    <input
                        value={query}
                        onChange={(e) => {
                            setquery(e.target.value);
                        }}
                        type="text" className="form-control" />
                </div>
                <h3>No se encontro ningun badge</h3>
                <Link to="/badges/new" className="btn btn-primary">
                    CREATE NEW BADGE
                    </Link>
            </div>
        )
    }
    return (
        <div className="BadgesList">
            <div className="form-group">
                <label htmlFor=""> Filter Badges</label>
                <input
                    value={query}
                    onChange={(e) => {
                        setquery(e.target.value);
                    }}
                    type="text" className="form-control" />
            </div>
            <ul className="list-unstyled">
                {
                    filteredBadges.map(badge => {
                        return (
                            <li key={badge.id}>
                                <Link
                                    className="text-reset text-decoration-none"
                                    key={badge.id}
                                    to={`/badges/${badge.id}`}>
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

export default BadgeList