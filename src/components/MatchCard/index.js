// Write your code here
import './index.css'

const MatchCard = props => {
  console.log(props)
  const {matchDetails} = props
  return (
    <li className="match-card">
      <img
        className="image-match-card"
        src={matchDetails.competing_team_logo}
        alt={`competing team ${matchDetails.competing_team}`}
      />
      <p>{matchDetails.competing_team}</p>
      <p>{matchDetails.result}</p>
      <p className="match-status-match-card">{matchDetails.match_status}</p>
    </li>
  )
}

export default MatchCard
