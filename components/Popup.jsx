import styles from "./Popup.module.css";

export default function Popup({ text, closePopup }) {
  const classNamesOuter = `${styles.popup} fixed pin z-50 overflow-auto bg-smoke-light flex`;
  const classNamesInner = `${styles.popup_inner} p-8 bg-white flex-col flex overflow-y-scroll`;
  const classNamesButton = `my-10 uppercase py-2 px-4 rounded bg-indigo-300 hover:bg-indigo-700 text-grey-400 font-medium`;
  return (
    <div className={classNamesOuter}>
      <div className={classNamesInner}>
        <h1>{text}</h1>
        <p></p>
        <button className={classNamesButton} onClick={closePopup}>
          Actions taken, take me further!
        </button>
      </div>
    </div>
  );
}
