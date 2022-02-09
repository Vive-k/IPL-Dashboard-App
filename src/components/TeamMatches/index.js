// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

// const TeamMatches = () => <h1>TeamMatches</h1>

const colors = {
  RCB: '#a4261d',
  KKR: '#5755a7',
  KXP: '#d91c1f',
  CSK: '#f7db00',
  RR: '#da237b',
  MI: '#13418b',
  SH: '#f26d22',
  DC: '#4f5db0',
}

class TeamMatches extends Component {
  state = {loadingStatus: true, matchesData: {}}

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    console.log(this.props)
    const {match} = this.props
    console.log(match)
    const {params} = match
    const {id} = params
    console.log(id)
    this.setState({loadingStatus: true})
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    console.log(response)
    const data = await response.json()
    console.log(data)
    const fetchedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    console.log(fetchedData.latestMatchDetails.competing_team)
    this.setState({loadingStatus: false, matchesData: fetchedData})
  }

  render() {
    const {loadingStatus, matchesData} = this.state

    const {match} = this.props
    const {params} = match
    const {id} = params

    const gradientColor = colors[id]
    console.log(gradientColor)

    return (
      <div
        className="teamMatches-page"
        style={{
          backgroundImage: `linear-gradient(to bottom, ${gradientColor},#0f172a`,
        }}
      >
        {loadingStatus ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <img
              className="banner"
              src={matchesData.teamBannerUrl}
              alt="team banner"
            />
            <div>
              <div>
                <h1>Latest Matches</h1>
                <LatestMatch
                  latestMatchDetails={matchesData.latestMatchDetails}
                />
              </div>
              <ul className="recent-matches-container">
                {matchesData.recentMatches.map(each => (
                  <MatchCard key={each.competing_team} matchDetails={each} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
