import Head from "next/head";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>HACKDAY 2020</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/banner.svg" />
        <div className="banner-text">
          <h1 className="text-center font-sans text-2xl py-8 text-gray-800">
            Hi and hooray for experimenting with AI!🎉
          </h1>
          <p className="py-6 font-sans text-lg text-gray-800 leading-loose">
            At Schibsted we want to make sure that the AI products and services
            we develop are responsible and safe for users to interact with. With
            this self-assessment we encourage all teams working with AI to take
            a socio-technical approach to their development. In the following
            self-assessment you and your team will get to explore various topics
            related to responsible AI, including:
          </p>
          <ul className="list-disc pl-10 font-medium font-sans text-gray-900">
            <li>Team diversity</li>
            <li>Data representation & algorithmic bias</li>
            <li>Threat identification</li>
            <li>Redressal & shut down</li>
          </ul>
        </div>

        <div className="my-10 uppercase py-2 px-4 rounded bg-green-400 hover:bg-green-700 text-grey-400 font-medium">
          <a href="/questionnaire">Take me to the self-assessment!</a>
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
