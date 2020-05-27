import styles from "./Popup.module.css"

export default function Popup({text, closePopup}) {
  return (
    <div className={styles.popup}>
      <div className={styles.popup_inner}>
        <h1>{text}</h1>
        <button onClick={closePopup}>Close me</button>
      </div>
    </div>
  );
}
