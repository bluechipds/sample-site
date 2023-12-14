import starryNightImage from './starry-night.jpg';
import handshakeImage from './handshake.jpg';

function Hero() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${starryNightImage})` }}>
      <h1>Websites & Apps Made Easy</h1>
    </div>
  );
}

function About() {
  return (
    <div className="about">
      <img src={handshakeImage} alt="Handshake" />
      <p>We create beautiful and functional websites and apps that help your business grow. Get in touch today!</p>
      <a href="/contact" className="button">Contact Us</a>
    </div>
  );
}

function ContactForm() {
  return (
    <form action="/submit" method="POST">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  );
}

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <ContactForm />
    </div>
  );
}

export default App;