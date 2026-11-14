
import "./App.css";

function App() {
  return (
    <main className="birthday-experience">
      {/* PAGE 1 */}
      <section className="birthday-screen first-screen">
        <img
          className="birthday-poster"
          src="/images/birthday-greeting.png"
          alt="Happy Birthday Kaniga birthday greeting"
        />

        <div className="swipe-hint">
          <span>Swipe up for another surprise</span>
          <span className="swipe-arrow">↓</span>
        </div>
      </section>

      {/* PAGE 2 */}
      <section className="birthday-screen second-screen">
        <img
          className="anime-poster"
          src="/images/anime-birthday.jpg"
          alt="Dreamy anime birthday celebration"
        />

        <div className="wish-message">
          <div className="footer-heart">♡</div>
          <h1>Three wishes are waiting for you!</h1>
          <p>Don't forget to ask Harissh. 🎁</p>
          <span>Made with friendship and lots of purple magic ✨</span>
        </div>
      </section>
    </main>
  );
}

export default App;
