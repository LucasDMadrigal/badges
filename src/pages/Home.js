import React from 'react';
import './styles/Home.css'
import { astronauts } from '../images/astronauts.svg'
class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <div>
                    <img src={astronauts} alt="astros" />
                    <h1>QUE ONDA CON ESTO</h1>
                </div>
            </div>
        )
    }
}

export default Home