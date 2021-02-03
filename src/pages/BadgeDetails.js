import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

import confLogo from '../images/platziconf-logo.svg'
import './styles/BadgeDetailsContainer.css'
import Badge from '../components/Badge'
import Modal from '../components/Modal'


function BadgeDetails(props) {

    const badge = props.badge

    return (
        <div className="">
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="" />
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name" >
                            <h1> {badge.firstName} {badge.lastName} </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Badge firstName={badge.firstName}
                        lastName={badge.lastName}
                        email={badge.email}
                        twitter={badge.twitter}
                        jobTitle={badge.jobTitle} />
                </div>
                <div className="col">
                    <h2>Actions</h2>

                    <div className="">
                        <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>
                            Edit
                            </Link>
                    </div>

                    <div className="">
                        <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>

                        <Modal onClose={props.onCloseModal} isOpen={props.ModalIsOpen}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam cumque consequuntur corporis enim distinctio ipsum alias facere voluptatum! Autem voluptate cumque magnam debitis aliquid sint excepturi quaerat quo nemo quae!</Modal>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default BadgeDetails
