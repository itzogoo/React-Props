
import PropTypes from "prop-types"
import "./PlayersList.css"


const PlayersList =({image,name,nationality,team,age,jerseyNumber})=> {

  return (
    <div className="container">
      <div className="card">
        <img src={image} alt="picture" />
        <div>
        <h3 className="title">Name:{name}</h3>
        <p>Nationality:{nationality}</p>
        </div>
        <div>
          <p>Team:{team}</p>
          <p>Age:{age}</p>
          <p>JerseyNumber:{jerseyNumber}</p>
        </div>
      </div>
    </div>
  );
};

PlayersList.propTypes = {
  age: PropTypes.number,
  image: PropTypes.string,
  jerseyNumber: PropTypes.number,
  name: PropTypes.string,
  nationality: PropTypes.string,
  team: PropTypes.string
}

export default PlayersList;





