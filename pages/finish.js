export default function FinishPage() {
  return (
    <>
      <style jsx>{`
      .banner {
          min-height: 100vh;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
        `}</style>
      <div
        className="container mx-auto banner"
        style={{ backgroundImage: "url(" + "/final.svg" + ")" }}
      ></div>
      <div className="my-10 uppercase text-center max-w-xl mx-auto py-2 px-4 rounded bg-green-400 hover:bg-green-700 text-grey-400 font-medium">
        <a href="/">Retake the test</a>
      </div>
    </>
  );
}
