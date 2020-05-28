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
      <a href="/">Retake the test</a>
    </>
  );
}
