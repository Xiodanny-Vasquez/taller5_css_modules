import React from "react";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>♥ EL PARAISO DEL DULCE ♥ </h2>
      <p className={styles.description}>
        ♥ UN MUNDO DE POSTRES PARA DELEITAR TUS SENTIDOS ♥ 
      </p>
      <button className={styles.button}>Click Aqui</button>
    </div>
  );
};

export default Card;