function Eksempel01VisVariable(): React.ReactElement  {

  let ost = "lugter";
  ost = "lugter meget";

  const mus = "brune mus"

  const antal = 5;

  return (
    <div>
      <p>Osten: {ost}</p>

      <p>nu kommer den store {mus}</p>

      <p>den {mus} har taget {antal} oste, som {ost}</p>

    </div>
  );
}
export default(Eksempel01VisVariable);