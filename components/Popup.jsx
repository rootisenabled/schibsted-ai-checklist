import styles from "./Popup.module.css";

export default function Popup({ text, closePopup }) {
  const classNamesOuter = `${styles.popup} fixed pin z-50 overflow-auto bg-smoke-light flex`;
  const classNamesInner = `${styles.popup_inner} p-8 bg-white flex-col flex overflow-y-scroll`;
  const classNamesButton = `my-10 uppercase py-2 px-4 rounded bg-indigo-300 hover:bg-indigo-700 text-grey-400 font-medium`;
  return (
    <div className={classNamesOuter}>
      <div className={classNamesInner}>
        <h1>{text}</h1>
        <p className="py-6">
          <b>Diversity is not just about visuals</b> - what we need is people
          with different perspectives who challenge each others’ biases as we
          develop products and services. Overlooking diversity and inclusion has
          many different risks, not least in AI development.{" "}
        </p>
        <p className="py-6">
          According to the AI Now Institute{" "}
          <b>
            there is a diversity crisis in the AI sector across gender and race.
          </b>{" "}
          Recent studies found only 18%of authors at leading AI conferences are
          women, and more than 80%of AI professors are men. This disparity is
          extreme in the AI industry: women comprise only 15% of AI research
          staff at Facebook and 10% at Google. There is no public data on trans
          workers or other gender minorities. For black workers, the picture is
          even worse. For example, only 2.5% of Google’s workforce is black,
          while Facebook and Microsoft are each at 4%.
        </p>
        <p className="py-6">
          In England, the London Annual Business Survey analysed data from 7,615
          firms to conclude that{" "}
          <b>
            ‘culturally diverse leadership teams were more likely to develop new
            products
          </b>{" "}
          than those with homogenous leadership’. Homogeneous ‘groupthink’ (the
          practice of making decisions within a group of people that all conform
          to a certain demographic norm, i.e. team members are all of one gender
          or ethnicity) can lead to <b>poor quality decision-making.</b>
        </p>
        <p className="py-6">
          In Spain, research involving more than 4,277 companies discovered that
          companies with{" "}
          <b>
            more women were more likely to introduce radical new innovations
          </b>{" "}
          into the market over a two-year.
        </p>
        <button className={classNamesButton} onClick={closePopup}>
          Actions taken, take me further!
        </button>
      </div>
    </div>
  );
}
