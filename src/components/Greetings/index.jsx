import "./style.css";
function Greetings({ userFirstName }) {
  return (
    <div className='greetings'>
      <h1 className='hello'>
        Bonjour <span className='userName'>{userFirstName}</span>
      </h1>
      <p className='message'>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}
export default Greetings;
