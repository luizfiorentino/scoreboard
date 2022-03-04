export default function Player(props) {
  return (
    <li>
      <p>Name: {props.naam}</p>
      <p>Score: {props.punten}</p>
    </li>
  );
}
