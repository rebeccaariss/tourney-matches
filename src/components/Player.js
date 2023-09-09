function Player(props) {

  const { gamerTag, firstName, lastName, wins } = props;
  return (
    <article className="Player">
      <h1>{firstName} <span>{gamerTag}</span> {lastName}</h1>
      {/* This is short circuit evaluation – if the condition left of '&&' resolves to
      false, the h2 will not be rendered at all: */}
      {wins === 0 && <h2 className="zero">Currently with no wins :(</h2>}
      {wins === 1 && <h2>Currently at 1 win</h2>}
      {wins > 1 && <h2>Currently at {wins} wins</h2>}
    </article>
  );
}

export default Player;