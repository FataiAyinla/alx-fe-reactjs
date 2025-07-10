<header>
  <h1>My Favorite Cities</h1>
</header>

<main>
  <p>I love to visit New York, Paris, and Tokyo.</p>
</main>

<footer>
  <p>© 2023 City Lovers</p>
</footer>

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
