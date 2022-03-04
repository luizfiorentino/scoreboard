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
      </p>
      {players_sorted.map((p) => (
        <Player key={p.id} naam={p.name} punten={p.score} />
      ))}

      <AddPlayer />
    </div>
  );
}
