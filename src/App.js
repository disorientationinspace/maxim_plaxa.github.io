import logo from "./img/btc.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Vitali Litvinovich</h1>
        <section className="summary">
          <h3 className="summary__title">
            <span className="years">4</span> years
          </h3>
          <span className="explanation">software engineering experience</span>
          <h4>Summary:</h4>
          <div className="expertise">
            <div className="block">
              <h3>JavaScript</h3>
              <ul>
                <li>React</li>
                <li>React Native</li>
                <li>Typescript</li>
              </ul>
            </div>
            <div className="block">
              <h3>Soft Skils</h3>
              <ul>
                <li>Proactive</li>
                <li>Able to meet deadlines</li>
                <li>Has an advanced level of English both written and spoken</li>
              </ul>
            </div>
            <div className="block">
              <h3>Node JS</h3>
              <ul>
                <li>Express.js</li>
                <li>Nest.js</li>
                <li>Stripe</li>
              </ul>
            </div>
            <div className="block">
              <h3>CI/CD</h3>
              <ul>
                <li>Jenkins</li>
                <li>AWS integration</li>
                <li>Terraform</li>
              </ul>
            </div>
            <div className="block">
              <h3>Development</h3>
              <ul>
                <li>Agile/Scrum</li>
                <li>JIRA</li>
              </ul>
            </div>
          </div>
        </section>
        <div className="socials">
          <p>Contact me on different networks</p>
          <ul>
            <li>
              <a href="https://t.me/witodivaro">Telegram</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/vitalilitvinovich/">LinkedIN</a>
            </li>
            <li>
              <a href="mailto:witodivaro@gmail.com">Gmail</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
