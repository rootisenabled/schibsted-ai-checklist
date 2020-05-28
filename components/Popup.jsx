import styles from "./Popup.module.css"

export default function Popup({text, closePopup}) {
  const classNamesOuter = `${styles.popup} fixed pin z-50 overflow-auto bg-smoke-light flex`;
  const classNamesInner = `${styles.popup_inner} relative p-8 bg-white flex-col flex`
  return (
    <div className={classNamesOuter}>
      <div className={classNamesInner}>
        <h1>{text}</h1>
        <button onClick={closePopup}>Close me</button>
      </div>
    </div>
  );
}
