import Head from "next/head";

export default function Home() {
  return (
    <div className="banner bg-cover bg-center">
      <Head>
        <title>HACKDAY 2020</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="start-button">
          <a href="/questionnaire">Start check</a>
        </div>
      </main>

      <style jsx>{`
        .banner {
          background-image: url("/banner.svg");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
          height: 100vh;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
