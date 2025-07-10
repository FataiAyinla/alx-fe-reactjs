function WelcomeMessage() {
    return (function App() {
  return (
    <div>
      <WelcomeMessage />
    </div>
  );
}

export default App;

        

function WelcomeMessage() {
    return (
        <div>
            <h1>Hello everyone, I am learning React at ALX!</h1>
            <p>This is a simple JSX component.</p>
            <p>I am learning about JSX!</p>
        </div>
    );
}

export default WelcomeMessage;

// src/components/Header.jsx
function Header() {
  return (
    <header>
      <h1>My Favorite Cities</h1>
    </header>
  );
}

export default Header;

// src/components/MainContent.jsx
function MainContent() {
  return (
    <main>
      <p>I love to visit New York, Paris, and Tokyo.</p>
    </main>
  );
}

export default MainContent;

// src/components/Footer.jsx
function Footer() {
  return (
    <footer>
      <p>© 2023 City Lovers</p>
    </footer>
  );
}

export default Footer;

// src/App.jsx
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
