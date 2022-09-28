import styles from "./Car.module.css";

const Car = ({car}) => {
  return (
    <div className={styles.card}>
      <h1>{car.name}</h1>
      <p className={styles.km}>{car.km} Km</p>
      <p style={{color: `${car.color}`}}>{car.color}</p>
    </div>
  )
}

export default Car