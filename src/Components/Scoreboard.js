import { useState } from "react";
import Player from "./Player";
import AddPlayer from "./AddPlayer";

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}
//Add a new function compare_name, and use it to sort the players by their name instead.
//Hint: sorting strings is a bit harder to do right. You might want to take a look at .localeCompare().
function compare_name(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name);
}

export default function Scoreboard() {
  const [sort_by, set_sort_by] = useState("score");
  const [players, set_players] = useState([
    { id: 1, name: "Hermes", score: 10 },
    { id: 2, name: "Renato", score: 8 },
    { id: 3, name: "Joselito", score: 6 },
    { id: 4, name: "Luis Bossa", score: 8 },
  ]);

  // Defining a callback function to be passed as callback props
  const incrementScore = (id) => {
    console.log("Which player's button have I clicked? ", id);

    const new_players_array = players.map((p) => {
      //decide whether this player's score needs to be incremented
      if (p.id === id) {
        // and if so, create, a new player object,
        return {
          ...p,
          // and then overriding the score property to be incremented
          score: p.score + 1,
        };
      } else {
        return p;
      }
    });
    set_players(new_players_array);
  };
  const reset = () => {
    const resetHere = players.map((p) => {
      console.log("testing the button");
      return {
        ...p,
        score: (p.score = 0),
      };
    });
    set_players(resetHere);
  };

  const randomize = () => {
    const randomScores = players.map((p) => {
      console.log("Testing the randomize button");

      return {
        ...p,
        score: (p.score = parseInt(Math.random() * 100)),
      };
    });
    set_players(randomScores);
  };

  const change_sorting = (event) => {
    console.log("New sort order", event.target.value);
    set_sort_by(event.target.value);
  };

  const players_sorted =
    sort_by === "name"
      ? [...players].sort(compare_name)
      : [...players].sort(compare_score);

  return (
    <div>
      <h2>Greet these amazing players ;)</h2>
      <p>
        Sort order:{" "}
        <select onChange={change_sorting} value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
        <button onClick={reset}>Reset Scores</button>
      </p>
      {players_sorted.map((p) => (
        <Player
          key={p.id}
          id={p.id}
          naam={p.name}
          punten={p.score}
          incrementScore={incrementScore}
        />
      ))}
      <button onClick={randomize}>Click to randomize the scores ;)</button>

      <AddPlayer
        addPlayer={(name) => {
          console.log("Lets add a new player called:", name);
        }}
      />
    </div>
  );
}
