import '../App.css';

const UserDetails = ({name, job, age}) => {
  return (
    <div className="user">
      <h2>{name}</h2>
      <p>Profession: {job}</p>
      <p>Age: {age}</p>
      {age > 18 ? (<p>Pode tirar a CNH!</p>) : (<p>Menor de idade!</p>)}
    </div>
  )
}

export default UserDetails;