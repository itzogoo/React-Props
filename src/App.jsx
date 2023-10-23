
import PlayersList from "./Components/PlayersList";


const App = () => {
  const players = [
    {
      age: "35",
      name: "Lionel Messi",
      team: "M L S",
      nationality: "Argentina",
      jersyNumber: "10",
      image: "public/messi.jpeg"
    },
    {
      age: "28",
      name: "Mo Salah",
      team: "Liverpool",
      nationality: "Egypt",
      jerseyNumber: "8",
      image: "public/mo shalla.jpeg"
    },
    {
      age: "27",
      name: "Victor Osimhen",
      team: "Napoli",
      nationality: "Nigeria",
      jerseyNumber: "7",
      image: "public/osimhen.jpeg"
    },
    {
      age: "26",
      name: "Reece James",
      team: "Chelsea",
      nationality: "England",
      jerseyNumber: "24",
      image: "public/reece.jpeg"
    }
  ];
  return (
    <div>
      {players.map(({name,age,team,nationality,jerseyNumber,image},index) =>(
        <PlayersList
        key={index}
        name={name}
        age={age}
        team={team}
        nationality={nationality}
        jerseyNumber={jerseyNumber}
        image={image}
        ></PlayersList>

      ))}
    </div>
  );  

}
export default App
  