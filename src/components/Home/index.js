// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {loadingStatus: true, teams: []}

  componentDidMount() {
    this.getTheTeams()
  }

  getTheTeams = async () => {
    this.setState({loadingStatus: true})
    const response = await fetch('https://apis.ccbp.in/ipl')
    console.log(response)
    const {teams} = await response.json()
    console.log(teams)
    const fetchedData = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    console.log(fetchedData)
    this.setState({loadingStatus: false, teams: fetchedData})
  }

  render() {
    const {loadingStatus, teams} = this.state

    return (
      <div className="page">
        <div className="title-container">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1>IPL Dashboard</h1>
        </div>
        {loadingStatus ? (
          <div testid="loader" className="loader-circle">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="cards-container">
            {teams.map(each => (
              <TeamCard key={each.id} teamDetails={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
