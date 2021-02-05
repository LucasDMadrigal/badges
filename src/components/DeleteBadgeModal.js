import React from 'react'
import api from '../api'
import Modal from './Modal'

function DeleteBadgeModal(props) {
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <div className="DeleteBadgeModal">

                <h1>Are You sure?</h1>
                <p>You are to delete this badge</p>

                <div className="">
                    <button onClick={props.onDelete} className=" btn btn-danger mr-4">
                        Delete
                </button>
                    <button onClick={props.onClose} className=" btn btn-primary">
                        Cancel
                </button>
                </div>
            </div>
        </Modal>
    )
}

export default DeleteBadgeModal
