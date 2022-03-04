import Player from "./Player";
import AddPlayer from "./AddPlayer";

export default function Scoreboard() {
  return (
    <div>
      <h2>Greet these amazing players ;)</h2>
      <ul>
        <Player naam="Hermes" />
        <Player naam="Renato" />
        <Player naam="Joselito" />
        <Player naam="Luis Bossa" />
      </ul>
    </div>
  );
}
