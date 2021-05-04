import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <main className="inset">
        <article className="information">
          <div className="inlay">
            <h1>Save the date</h1>
          </div>
          <div className="wedding-party">
            <p>Joanne Paul</p>
            <p className="silver">
              <i>&</i>
            </p>
            <p>James Darrall</p>
            <p>are getting married</p>
          </div>
          <aside className="dates">
            <div className="date">
              <p>Sunday 1st May, 2022</p>
              <p>
                Worthing, West Sussex, U.K.
              </p>
            </div>
            <div className="date">
              <p>Saturday 7th May, 2022</p>
              <p>
                Jordan Village, ON, Canada
              </p>
            </div>
          </aside>
          <div className="post-script">
            <p>
              <i>Formal invitation and details to follow </i>
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}

export default App;
