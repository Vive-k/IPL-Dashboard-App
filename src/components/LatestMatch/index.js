// Write your code here
import './index.css'

const LatestMatch = props => {
  console.log('*/*/*/')
  console.log(props)
  const {latestMatchDetails} = props

  return (
    <div className="latest-match-card">
      <div className="match-detail">
        <div className="class1">
          <p>{latestMatchDetails.competing_team}</p>
          <p>{latestMatchDetails.date}</p>
          <p>{latestMatchDetails.venue}</p>
          <p>{latestMatchDetails.result}</p>
        </div>
        <div className="image-kontainer">
          <img
            className="image-latest-match"
            src={latestMatchDetails.competing_team_logo}
            alt={`latest match ${latestMatchDetails.competing_team}`}
          />
        </div>
      </div>
      <div className="class1">
        <h1>First Innings</h1>
        <p>{latestMatchDetails.first_innings}</p>
        <h1>Second Innings</h1>
        <p>{latestMatchDetails.second_innings}</p>
        <h1>Man Of The Match</h1>
        <p>{latestMatchDetails.man_of_the_match}</p>
        <h1>Umpires</h1>
        <p>{latestMatchDetails.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
