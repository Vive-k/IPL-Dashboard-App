// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  console.log(props)
  const {teamDetails} = props
  console.log(teamDetails)
  const {id, name, teamImageUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="nav-link">
      <li className="team-card">
        <div className="img-container">
          <img className="card-image" src={teamImageUrl} alt={`${name}`} />
        </div>
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
