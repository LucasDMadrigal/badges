import React from 'react'

import api from '../api'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

import BadgeDetails from './BadgeDetails'

class BadgeDetailsContainer extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false
    }

    componentDidMount() {
        this.fetchdata()
    }

    fetchdata = async () => {
        this.setState({
            loading: true,
            error: null
        })

        try {
            const data = await api.badges.read(this.props.match.params.badgeId)

            this.setState({
                loading: false, data: data
            })
        }
        catch (error) {
            this.setState({
                loading: true,
                error: error
            })
        }
    }

    handleCloseModal = () => {
        this.setState({ modalIsOpen: false })
    }

    handleOpenModal = () => {
        this.setState({ modalIsOpen: true })
    }

    render() {

        if (this.state.loading) {
            return <PageLoading />
        }
        if (this.state.error) {
            return <PageError />
        }

        const badge = this.state.data

        return (
            <BadgeDetails
                onCloseModal={this.handleCloseModal}
                onOpenModal={this.handleOpenModal}
                modalIsOpen={this.state.modalIsOpen}
                badge={this.state.data} />
        )
    }
}

export default BadgeDetailsContainer