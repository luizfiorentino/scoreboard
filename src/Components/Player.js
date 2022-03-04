export default function Player(props) {
  const onClickIncrement = () => {
    // call the callback prop passed down from Scoreboard
    props.incrementScore(props.id);
  };

  return (
    <li>
      <p>Name: {props.naam}</p>
      <p>Score: {props.punten}</p>
      <button onClick={onClickIncrement}>increment score</button>
    </li>
  );
}
